import createElement from '../../utils/createElement';
import CustomInput from './customInput';

class DoubleInput extends CustomInput {
  constructor(headline, type, oninput, secondaryInputType, secondaryInputOninput) {
    super(headline, type, oninput);

    this.prop = {
      secondaryInputType,
      secondaryInputOninput,
    };
  }

  _createSecondaryInput() {
    this._container.classList.add('double-input');

    const input = createElement({ tagName: 'input', className: 'custom-input' });
    input.type = this.prop.secondaryInputType;
    input.oninput = this.prop.secondaryInputOninput;
    input.required = true;

    this._container.append(input);
    return this._container;
  }

  render() {
    this._createElem();
    this._createSecondaryInput();

    return this._container;
  }
}

export default DoubleInput;
