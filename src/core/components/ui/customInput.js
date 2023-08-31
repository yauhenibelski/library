import Component from '../template/component';
import createElement from '../../utils/createElement';

class CustomInput extends Component {
  constructor(headline, type) {
    super('div', 'custom-input-container');

    this.headline = createElement({ tagName: 'h4', className: 'custom-input-headline', text: headline });
    this.input = createElement({ tagName: 'input', className: 'custom-input' });
    this.input.type = type;
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
