import Component from '../template/component';
import createElement from '../../utils/createElement';

class CustomInput extends Component {
  constructor(headline, type, oninput) {
    super('div', 'custom-input-container');

    this.headline = createElement({ tagName: 'h4', className: 'custom-input-headline', text: headline });
    this.input = createElement({ tagName: 'input', className: 'custom-input' });
    this.input.type = type;
    this.input.oninput = oninput;

    if (type === 'password') this.input.setAttribute('minlength', '8');
  }

  _createElem() {
    this._container.append(this.headline);
    this._container.append(this.input);
  }

  render() {
    this._createElem();
    return this._container;
  }
}

export default CustomInput;
