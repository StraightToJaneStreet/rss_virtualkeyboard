import './styles/init.scss';

import TextArea from './js/TextArea';
import KeyboardBuilder from './js/Keyboard';

import defaultLayout from './defaultLayout.json';
import keyCapsUS from './keycaps_US.json';
import keyCapsRU from './keycaps_RU.json';

document.addEventListener('DOMContentLoaded', () => {
  const textarea = new TextArea();
  textarea.render({ element: document.body });

  const keyboard = new KeyboardBuilder(defaultLayout);
  keyboard.attachCaps('US', keyCapsUS);
  keyboard.attachCaps('RU', keyCapsRU);
  keyboard.loadLocalLayout();
  keyboard.attachOutput(textarea);
  keyboard.render({ element: document.body });
});
