export default class Key extends EventTarget {
  constructor({ context, code }) {
    super();

    this.context = context;
    this.code = code;
    this.mouseDown = false;
    this.element = null;
  }

  getElement() {
    return this.element;
  }

  globalMouseUpHandler() {
    if (this.mouseDown) {
      this.emitKeyUp();
    }
  }

  attachElementListeners() {
    this.element.addEventListener('mouseup', this.emitKeyUp.bind(this));
    this.element.addEventListener('mousedown', () => {
      this.mouseDown = true;
      this.emitKeyDown();
    });

    document.addEventListener('mouseup', this.globalMouseUpHandler.bind(this));
  }

  emitKeyUp() {
    this.mouseDown = false;

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
      },
    });
    this.dispatchEvent(e);

    if (this.emitCharacter) {
      this.emitCharacter();
    }
  }

  emulateKeyUp() {
    this.emitKeyUp();
  }

  emulateKeyDown() {
    this.emitKeyDown();
  }
}
