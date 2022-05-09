export default class FunctionalKey extends EventTarget {
  constructor({ code, label, span }) {
    super();

    this.code = code;

    this.wasMouseDown = false;

    const el = document.createElement('button');
    this.element = el;

    el.classList.add('key', `key--span_${span}`);
    el.innerText = label;

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

  emitKeyDown() {
    this.element.classList.add('key--pressed');
    const e = new CustomEvent('key-down', {
      detail: {
        code: this.code,
      },
    });
    this.dispatchEvent(e);
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

  getElement() {
    return this.element;
  }

  emulateKeyDown() {
    this.emitKeyDown();
  }

  emulateKeyUp() {
    this.emitKeyUp();
  }
}
