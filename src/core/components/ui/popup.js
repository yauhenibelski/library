import Component from '../template/component';

class Popup extends Component {
  constructor(content) {
    super('div', 'popup-container');
    this.content = content;
    Popup.elem = Object.assign(this);
  }

  remove() {
    this._container.style.opacity = 0;
    setTimeout(() => { this._container.remove(); }, 200);
  }

  _createPopup() {
    this._container.style.opacity = 0;
    this._container.append(this.content);

    this.content.onclick = (elem) => elem.stopPropagation();
    this._container.onclick = () => this.remove();

    setTimeout(() => { this._container.style.opacity = ''; }, 100);
  }

  render() {
    this._createPopup();
    return this._container;
  }
}
Popup.run = (content) => document.body.append(new Popup(content).render());

export default Popup;
