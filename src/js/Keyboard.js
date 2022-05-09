import FunctionalKey from './FunctionalKey';
import CharKey from './CharKey';

export default class Keyboard {
  constructor(layout) {
    const el = document.createElement('div');

    this.element = el;
    this.keys = {};
    this.charKeys = {};

    this.functionalKeyCodes = [];
    this.charKeyCodes = [];

    this.shiftActive = false;
    this.altActive = false;
    this.capsActive = false;

    this.capsList = [];
    this.currentCapIndex = null;

    this.capsLockLocked = false;

    el.classList.add('keyboard', 'section');

    layout.lines.forEach((line) => {
      line.forEach((keyParams) => {
        let key;

        if (keyParams.type === 'functional') {
          key = new FunctionalKey(keyParams);

          this.functionalKeyCodes.push(keyParams.code);

          key.addEventListener('key-down', this.handleShiftDown.bind(this));
          key.addEventListener('key-up', this.handleShiftUp.bind(this));

          key.addEventListener('key-down', this.handleAltDown.bind(this));
          key.addEventListener('key-up', this.handleAltUp.bind(this));

          key.addEventListener('key-down', this.handleCapsLockDown.bind(this));
          key.addEventListener('key-up', this.handleCapsLockUp.bind(this));
        } else if (keyParams.type === 'char') {
          key = new CharKey(keyParams);

          this.charKeyCodes.push(keyParams.code);

          this.charKeys[keyParams.code] = {
            caps: [],
            currentCap: null,
            key,
          };

          key.addEventListener('key-down', this.handleCharacterInput.bind(this));
        }

        this.keys[keyParams.code] = key;
        this.element.append(key.getElement());
      });
    });
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  isAltCharActive() {
    return (this.capsActive && !this.shiftActive) || (!this.capsActive && this.shiftActive);
  }

  handleKeyDown(e) {
    const { code } = e;
    e.preventDefault();
    this.keys[code].emulateKeyDown();
  }

  handleKeyUp(e) {
    const { code } = e;
    e.preventDefault();
    this.keys[code].emulateKeyUp();
  }

  handleShiftUp(e) {
    if (e.detail.code !== 'ShiftLeft' && e.detail.code !== 'ShiftRight') {
      return;
    }
    this.shiftActive = false;
  }

  handleCapsLockDown(e) {
    if (this.capsLockLocked || e.detail.code !== 'CapsLock') {
      return;
    }
    this.capsLockLocked = true;
    this.capsActive = !this.capsActive;
  }

  handleCapsLockUp(e) {
    if (e.detail.code !== 'CapsLock') {
      return;
    }
    this.capsLockLocked = false;
  }

  handleShiftDown(e) {
    if (e.detail.code !== 'ShiftLeft' && e.detail.code !== 'ShiftRight') {
      return;
    }
    if (this.altActive) {
      this.changeCaps();
    }
    this.shiftActive = true;
  }

  handleCharacterInput(e) {
    const alt = this.isAltCharActive();
    if (alt) {
      this.output.writeChar(e.detail.altChar);
    } else {
      this.output.writeChar(e.detail.char);
    }
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

  changeCaps() {
    if (this.currentCapIndex === this.capsList.length - 1) {
      this.currentCapIndex = 0;
    } else {
      this.currentCapIndex += 1;
    }

    Object.keys(this.charKeys).forEach((keyCode) => {
      this.charKeys[keyCode].currentCap = this.capsList[this.currentCapIndex];
      this.charKeys[keyCode].key.setCap(this.charKeys[keyCode].caps[this.currentCapIndex]);
    });
  }

  attachCaps(langCode, layout) {
    this.capsList.push(langCode);

    if (this.currentCapIndex === null) {
      this.currentCapIndex = 0;
    }

    Object.entries(layout.keycaps).forEach(([keyCode, cap]) => {
      this.charKeys[keyCode].caps.push(cap);
      if (this.charKeys[keyCode].currentCap === null) {
        this.charKeys[keyCode].currentCap = langCode;
        this.charKeys[keyCode].key.setCap(cap);
      }
    });
  }

  attachOutput(output) {
    this.output = output;
  }

  render({ element: rootElement }) {
    rootElement.append(this.element);
  }
}
