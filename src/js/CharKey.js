import Key from './Key';

export default class CharKey extends Key {
  constructor(keyParams, caps, langCode) {
    super(keyParams);

    this.char = null;
    this.caps = caps;
    this.currentLang = langCode;

    this.ignoreCapsLock = !!keyParams.ignoreCapsLock;
    this.shiftActive = false;
    this.capsLockActive = false;

    this.label = keyParams.label;

    const { span: width } = keyParams;
    this.createElement({ width });
    this.attachElementListeners();

    const { context } = keyParams;

    context.addEventListener('keyboard-change-register', this.changeRegister.bind(this));
    context.addEventListener('keyboard-change-layout', this.changeCaps.bind(this));

    context.addEventListener('keyboard-shift-enable', this.shiftEnable.bind(this));
    context.addEventListener('keyboard-shift-disable', this.shiftDisable.bind(this));

    context.addEventListener('keyboard-caps-lock-enable', this.capsLockEnable.bind(this));
    context.addEventListener('keyboard-caps-lock-disable', this.capsLockDisable.bind(this));
  }

  shiftEnable() {
    this.shiftActive = true;
    this.updateCap();
  }

  shiftDisable() {
    this.shiftActive = false;
    this.updateCap();
  }

  capsLockEnable() {
    this.capsLockActive = true;
    this.updateCap();
  }

  capsLockDisable() {
    this.capsLockActive = false;
    this.updateCap();
  }

  needAltSymbol() {
    const { shiftActive, capsLockActive, ignoreCapsLock } = this;
    if (ignoreCapsLock) {
      return shiftActive;
    }
    return (!shiftActive && capsLockActive) || (shiftActive && !capsLockActive);
  }

  updateCap() {
    if (this.label !== undefined) {
      this.element.innerText = this.label;
      return;
    }
    const { currentLang } = this;
    const currentCap = this.caps[currentLang];
    const currentChar = this.needAltSymbol() ? currentCap.altChar : currentCap.char;
    this.element.innerText = currentChar;
  }

  changeCaps(e) {
    const { langCode } = e.detail;
    this.currentLang = langCode;
    this.updateCap();
  }

  emitCharacter() {
    const { currentLang } = this;
    const currentCap = this.caps[currentLang];
    const content = (this.label !== undefined) ? currentCap.char : this.element.innerText;
    const e = new CustomEvent('key-emit', {
      detail: {
        char: content,
      },
    });
    this.dispatchEvent(e);
  }

  changeRegister() {
    this.registerState = !this.registerState;
  }

  createElement({ width }) {
    const el = document.createElement('button');

    el.classList.add('key', (width && `key--span_${width}`));

    this.element = el;
  }
}
