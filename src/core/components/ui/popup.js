import Component from '../template/component';

class Popup extends Component {
  constructor(content) {
    super('div', 'popup-container');
    this.content = content;
    Popup._container = this._container;
  }

  _createPopup() {
    this._container.append(this.content);
    this._container.onclick = () => this._container.remove();
    this.content.onclick = (elem) => elem.stopPropagation();
  }

  render() {
    this._createPopup();
    return this._container;
  }
}
Popup.run = (content) => document.body.append(new Popup(content).render());

export default Popup;
