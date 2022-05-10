import './styles/init.scss';

import TextArea from './js/TextArea';
import KeyboardBuilder from './js/Keyboard';

import defaultLayout from './defaultLayout.json';
import keyCapsUS from './keycaps_US.json';
import keyCapsRU from './keycaps_RU.json';

document.addEventListener('DOMContentLoaded', () => {
  const textarea = new TextArea();
  textarea.render({ element: document.body });

  const capsCollection = [
    {
      langCode: 'US',
      content: keyCapsUS,
    },
    {
      langCode: 'RU',
      content: keyCapsRU,
    },
  ];

  const keyboard = new KeyboardBuilder(defaultLayout, capsCollection);
  keyboard.attachOutput(textarea);
  keyboard.render({ element: document.body });

  const langNotice = document.createElement('p');
  langNotice.classList.add('notice', 'section');
  langNotice.innerHTML = 'Layout Change: Hold <kbd>Alt</kbd> + Tap <kbd>Shift</kbd>';

  document.body.append(langNotice);

  const osNotice = document.createElement('p');
  osNotice.classList.add('notice', 'section');
  osNotice.innerHTML = 'OS: Manjaro Linux';

  document.body.append(osNotice);
});
