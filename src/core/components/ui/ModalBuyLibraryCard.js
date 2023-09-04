import createElement from '../../utils/createElement';
import Component from '../template/component';
import CustomInput from './customInput';
import DoubleInput from './doubleInput';

class BuyLibraryCard extends Component {
  constructor(bookID) {
    super('div', 'buy-library-card-container');
    this.book = bookID;
  }

  _create() {
    const headline = createElement({ tagName: 'h2', text: 'Buy a library card' });
    const inputsContainer = createElement({ tagName: 'div', className: 'inputs_container' });
    const warningContainer = createElement({ tagName: 'div', className: 'warning_container' });
    const contentWrap = createElement({ tagName: 'div', className: 'content-wrap' });
    const priceContainer = createElement({ tagName: 'div', className: 'price-container' });
    const buyBtn = createElement({ tagName: 'button', className: 'btn', text: 'Buy' });
    const price = createElement({ tagName: 'h3', text: '$ 25.00' });
    const warning = createElement({ tagName: 'p', text: 'If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.' });

    priceContainer.append(buyBtn);
    priceContainer.append(price);

    warningContainer.append(warning);

    inputsContainer.append(new CustomInput('Bank card number').render());
    inputsContainer.append(new DoubleInput('Expiration code').render());
    inputsContainer.append(new CustomInput('CVC').render());
    inputsContainer.append(new CustomInput('Cardholder name').render());
    inputsContainer.append(new CustomInput('Postal code').render());
    inputsContainer.append(new CustomInput('City / Town').render());
    inputsContainer.append(priceContainer);

    contentWrap.append(inputsContainer);
    contentWrap.append(warningContainer);

    this._container.append(headline);
    this._container.append(contentWrap);
  }

  render() {
    this._create();
    return this._container;
  }
}
export default BuyLibraryCard;
