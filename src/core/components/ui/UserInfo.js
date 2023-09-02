import createElement from '../../utils/createElement';
import Component from '../template/component';
import getImg from '../../utils/getImg';

class UserInfo extends Component {
  constructor(text, src, value) {
    super('div', 'user-info-wrap');
    this.text = text;
    this.img = getImg(src);
    this.value = value;
  }

  _create() {
    const text = createElement({ tagName: 'p', className: 'user-info-text', text: this.text });
    const value = createElement({ tagName: 'p', className: 'user-info-text', text: this.value });

    this._container.append(text);
    this._container.append(this.img);
    this._container.append(value);
  }

  render() {
    this._create();
    return this._container;
  }
}
export default UserInfo;
