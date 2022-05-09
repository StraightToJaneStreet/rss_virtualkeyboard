import Key from './Key';

export default class FunctionalKey extends Key {
  constructor(keyParams, label) {
    super(keyParams);

    this.label = label;

    const { span: width } = keyParams;
    this.createElement({ width });
    this.attachElementListeners();
  }

  createElement({ width }) {
    const el = document.createElement('button');

    el.classList.add('key', (width && `key--span_${width}`));
    el.innerText = this.label;

    this.element = el;
  }
}
