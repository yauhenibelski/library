import Component from '../template/component';
import createElement from '../../utils/createElement';

class Popup extends Component {
  constructor(content) {
    super('div', 'popup-container');
    this.content = content;
    this.closeBtn = createElement({ tagName: 'button', className: 'popup-close-btn' });
    Popup.elem = Object.assign(this);
  }

  remove() {
    this._container.style.opacity = 0;
    setTimeout(() => { this._container.remove(); }, 200);
  }

  _createPopup() {
    this.closeBtn.classList.add('popup-close-black-btn');

    this.closeBtn.onclick = () => this.remove();

    this._container.style.opacity = 0;
    this._container.append(this.content);
    this._container.append(this.closeBtn);

    this.content.onclick = (elem) => elem.stopPropagation();
    this._container.onclick = () => this.remove();

    setTimeout(() => {
      this._container.style = '';

      // close btn position
      // eslint-disable-next-line max-len
      const left = this.content.offsetLeft + this.content.offsetWidth - this.closeBtn.offsetWidth - 15;
      const top = this.content.offsetTop + 15;

      this.closeBtn.style.left = `${left}px`;
      this.closeBtn.style.top = `${top}px`;
    }, 100);
  }

  render() {
    this._createPopup();
    return this._container;
  }
}
Popup.run = (content, color) => {
  setTimeout(() => {
    if (color === 'white') {
      Popup.elem.closeBtn.classList.remove('popup-close-black-btn');
      Popup.elem.closeBtn.classList.add('popup-close-white-btn');
    }
  });
  document.body.append(new Popup(content).render());
};

export default Popup;
