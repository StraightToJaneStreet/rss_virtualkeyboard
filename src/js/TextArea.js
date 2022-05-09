export default class TextArea {
  constructor() {
    const el = document.createElement('textarea');
    el.classList.add('textarea', 'section');
    el.disabled = true;
    el.rows = 10;
    this.element = el;
  }

  writeChar(ch) {
    this.element.value += ch;
  }

  removeChar() {
    const oldValue = this.element.value;
    this.element.value = oldValue.slice(0, -1);
  }

  render({ element: rootElement }) {
    rootElement.append(this.element);
  }
}
