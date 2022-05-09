export default class CharKey extends EventTarget {
  constructor(params) {
    super();
    const { code } = params;

    this.code = code;

    const el = document.createElement('button');
    this.element = el;
    el.classList.add('key');
    if (params.span) {
      el.classList.add('key', `key--span_${params.span}`);
    }

    el.addEventListener('mouseup', this.emitKeyUp.bind(this));
    el.addEventListener('mousedown', () => {
      this.wasMouseDown = true;
      this.emitKeyDown();
    });

    document.addEventListener('mouseup', this.globalMouseUpHandler.bind(this));
  }

  globalMouseUpHandler() {
    if (this.wasMouseDown) {
      this.emitKeyUp();
    }
  }

  setCap(cap) {
    this.cap = cap;
    this.updateCap();
  }

  emitKeyUp() {
    this.wasMouseDown = false;
    this.element.classList.remove('key--pressed');
    const e = new CustomEvent('key-up', {
      detail: {
        code: this.code,
      },
    });
    this.dispatchEvent(e);
  }

  emitKeyDown() {
    this.element.classList.add('key--pressed');
    const e = new CustomEvent('key-down', {
      detail: {
        code: this.code,
        char: this.cap.char,
        altChar: this.cap.altChar,
      },
    });
    this.dispatchEvent(e);
  }

  emulateKeyUp() {
    this.emitKeyUp();
  }

  emulateKeyDown() {
    this.emitKeyDown();
  }

  updateCap() {
    this.element.innerText = this.cap.char;
  }

  getElement() {
    return this.element;
  }
}
