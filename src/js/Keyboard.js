import FunctionalKey from './FunctionalKey';
import CharKey from './CharKey';

export default class Keyboard extends EventTarget {
  constructor(layout, capsCollection) {
    super();

    const el = document.createElement('div');

    this.element = el;
    this.keys = {};
    this.charKeys = {};

    this.functionalKeyCodes = [];
    this.charKeyCodes = [];

    this.shiftActive = false;
    this.altActive = false;
    this.capsActive = false;

    this.capsCodes = capsCollection.map(({ langCode }) => langCode);
    this.capsCollection = capsCollection;
    this.currentCapIndex = null;
    this.currentLangCode = null;

    this.capsLockLocked = false;

    el.classList.add('keyboard', 'section');

    layout.lines.forEach((line) => {
      line.forEach((keyParams) => {
        let key;
        const { code } = keyParams;
        const combinedKeyParams = { context: this, ...keyParams };

        if (keyParams.type === 'functional') {
          const { label } = keyParams;
          key = new FunctionalKey(combinedKeyParams, label);
          this.functionalKeyCodes.push(code);

          key.addEventListener('key-down', this.handleShiftDown.bind(this));
          key.addEventListener('key-up', this.handleShiftUp.bind(this));

          key.addEventListener('key-down', this.handleAltDown.bind(this));
          key.addEventListener('key-up', this.handleAltUp.bind(this));

          key.addEventListener('key-down', this.handleCapsLockDown.bind(this));
          key.addEventListener('key-up', this.handleCapsLockUp.bind(this));

          key.addEventListener('key-down', this.handleBackspaceDown.bind(this));
        } else if (keyParams.type === 'char') {
          const caps = this.constructor.extractKeyCaps(code, capsCollection);

          key = new CharKey(combinedKeyParams, caps);
          key.addEventListener('key-emit', this.handleCharacterInput.bind(this));
          this.charKeyCodes.push(keyParams.code);
        }

        this.keys[keyParams.code] = key;
        this.element.append(key.getElement());
      });
    });

    if (localStorage.getItem('keyboard')) {
      this.setCaps(localStorage.getItem('keyboard'));
    } else {
      this.setCaps('US');
    }

    document.addEventListener('keyup', this.handleKeyUp.bind(this));
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  static extractKeyCaps(keyCode, collection) {
    const extracted = {};
    collection.forEach(({ langCode, content }) => {
      extracted[langCode] = content.keycaps[keyCode];
    });
    return extracted;
  }

  emitCapsLockEnable() {
    const e = new CustomEvent('keyboard-caps-lock-enable');
    this.dispatchEvent(e);
  }

  emitCapsLockDisable() {
    const e = new CustomEvent('keyboard-caps-lock-disable');
    this.dispatchEvent(e);
  }

  emitShiftEnable() {
    const e = new CustomEvent('keyboard-shift-enable');
    this.dispatchEvent(e);
  }

  emitShiftDisable() {
    const e = new CustomEvent('keyboard-shift-disable');
    this.dispatchEvent(e);
  }

  handleKeyDown(e) {
    if (!Object.keys(this.keys).includes(e.code)) {
      return;
    }
    const { code } = e;
    e.preventDefault();
    this.keys[code].emulateKeyDown();
  }

  handleKeyUp(e) {
    if (!Object.keys(this.keys).includes(e.code)) {
      return;
    }
    const { code } = e;
    e.preventDefault();
    this.keys[code].emulateKeyUp();
  }

  handleShiftUp(e) {
    if (e.detail.code !== 'ShiftLeft' && e.detail.code !== 'ShiftRight') {
      return;
    }

    if (e.detail.code === 'ShiftLeft') {
      this.shiftLeft = false;
    } else {
      this.shiftRight = false;
    }

    if (!this.shiftLeft && !this.shiftRight) {
      this.emitShiftDisable();
    }
  }

  handleShiftDown(e) {
    if (e.detail.code !== 'ShiftLeft' && e.detail.code !== 'ShiftRight') {
      return;
    }
    if (this.altActive) {
      this.nextCaps();
    }

    if (e.detail.code === 'ShiftLeft') {
      this.shiftLeft = true;
    } else {
      this.shiftRight = true;
    }

    this.emitShiftEnable();
  }

  handleBackspaceDown(e) {
    if (e.detail.code !== 'Backspace') {
      return;
    }
    this.output.removeChar();
  }

  handleCapsLockDown(e) {
    if (this.capsLockLocked || e.detail.code !== 'CapsLock') {
      return;
    }
    this.capsLockLocked = true;
    if (this.capsActive) {
      this.emitCapsLockDisable();
    } else {
      this.emitCapsLockEnable();
    }
    this.capsActive = !this.capsActive;
  }

  handleCapsLockUp(e) {
    if (e.detail.code !== 'CapsLock') {
      return;
    }
    this.capsLockLocked = false;
  }

  handleCharacterInput(e) {
    this.output.writeChar(e.detail.char);
  }

  handleAltUp(e) {
    if (e.detail.code !== 'AltLeft' && e.detail.code !== 'AltRight') {
      return;
    }
    this.altActive = false;
  }

  handleAltDown(e) {
    if (e.detail.code !== 'AltLeft' && e.detail.code !== 'AltRight') {
      return;
    }
    this.altActive = true;
  }

  nextCaps() {
    const langsCount = this.capsCodes.length;
    const nextCapsIndex = this.currentCapIndex === langsCount - 1 ? 0 : this.currentCapIndex + 1;
    const newLangCode = this.capsCodes[nextCapsIndex];
    this.setCaps(newLangCode);
  }

  setCaps(langCode) {
    this.currentCapIndex = this.capsCodes.findIndex((code) => code === langCode);
    this.currentLangCode = langCode;
    localStorage.setItem('keyboard', this.currentLangCode);
    this.emitChangeLayout();
  }

  emitChangeLayout() {
    const e = new CustomEvent('keyboard-change-layout', {
      detail: {
        langCode: this.currentLangCode,
      },
    });
    this.dispatchEvent(e);
  }

  attachCaps(langCode, layout) {
    this.capsList.push(langCode);

    Object.entries(layout.keycaps).forEach(([keyCode, cap]) => {
      this.charKeys[keyCode].caps.push(cap);
    });
  }

  attachOutput(output) {
    this.output = output;
  }

  render({ element: rootElement }) {
    rootElement.append(this.element);
  }
}
