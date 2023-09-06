import createElement from '../../utils/createElement';
import Component from '../template/component';
import CustomInput from './customInput';
import DoubleInput from './doubleInput';
import validInput from '../../utils/validInput';
import App from '../../App';
import BooksContainer from './BooksContainer';
import Popup from './popup';
import FindLibraryCard from './FindLibraryCard';
import saveUsersInLocalStorage from '../../utils/saveUsersInLocalStorage';

class BuyLibraryCard extends Component {
  constructor(book) {
    super('div', 'buy-library-card-container');
    this.book = book;
  }

  _create() {
    const headline = createElement({ tagName: 'h2', text: 'Buy a library card' });
    const inputsContainer = createElement({ tagName: 'div', className: 'inputs_container' });
    const warningContainer = createElement({ tagName: 'div', className: 'warning_container' });
    const contentWrap = createElement({ tagName: 'div', className: 'content-wrap' });
    const priceContainer = createElement({ tagName: 'div', className: 'price-container' });
    const buyBtn = createElement({ tagName: 'button', className: 'btn', text: 'Buy' });
    const price = createElement({ tagName: 'h3', text: `$${this.book.price}` });
    const warning = createElement({ tagName: 'p', text: 'If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.' });

    buyBtn.disabled = true;

    priceContainer.append(buyBtn);
    priceContainer.append(price);

    warningContainer.append(warning);

    // !!!!!!!!!!!!!! Destructurise !!!!!!!!!!!!!!!!!!
    const cvc = new CustomInput('CVC', 'name', (e) => {
      validInput(e, () => {
        const elem = e.target;

        if (Number.isNaN(+e.data) || e.data === ' ') {
          const lastIndex = elem.value.length - 1;
          elem.value = [...elem.value.slice(0, lastIndex)].join('');
        }
        if (elem.value.length === 3) return true;

        return false;
      });
    }).render();
    cvc.style.width = '45px'; // !!!!!

    inputsContainer.append(new CustomInput('Bank card number', 'name', (e) => {
      validInput(e, () => {
        const elem = e.target;

        if (Number.isNaN(+e.data)) {
          const lastIndex = elem.value.length - 1;
          elem.value = [...elem.value.slice(0, lastIndex)].join('');
        }
        if (elem.value.split(' ').join('').length === 16) return true;

        return false;
      });
    }).render());
    inputsContainer.append(new DoubleInput(
      'Expiration code',
      'name',
      (e) => {
        validInput(e, () => {
          const elem = e.target;

          if (Number.isNaN(+e.data) || e.data === ' ') {
            const lastIndex = elem.value.length - 1;
            elem.value = [...elem.value.slice(0, lastIndex)].join('');
          }
          if (Number(elem.value) <= 31 && elem.value.length === 2) return true;

          return false;
        });
      },
      'name',
      (e) => {
        validInput(e, () => {
          const elem = e.target;

          if (Number.isNaN(+e.data) || e.data === ' ') {
            const lastIndex = elem.value.length - 1;
            elem.value = [...elem.value.slice(0, lastIndex)].join('');
          }
          if (Number(elem.value) <= 12 && elem.value.length === 2) return true;

          return false;
        });
      },
    ).render());

    // !!------------------------------------------------------------------------------------
    inputsContainer.append(cvc);
    inputsContainer.append(new CustomInput('Cardholder name', 'name', (e) => validInput(e, () => (!!e.target.validity.valid))).render());
    inputsContainer.append(new CustomInput('Postal code', 'name', (e) => validInput(e, () => (!!e.target.validity.valid))).render());
    inputsContainer.append(new CustomInput('City / Town', 'name', (e) => validInput(e, () => (!!e.target.validity.valid))).render());
    inputsContainer.append(priceContainer);

    contentWrap.append(inputsContainer);
    contentWrap.append(warningContainer);

    const inputs = this._container.getElementsByTagName('input');

    inputsContainer.oninput = () => {
      if ([...inputs].every((element) => element.validity.valid)) {
        buyBtn.disabled = false;
      }
    };

    buyBtn.onclick = () => {
      App.user.books.push(this.book.id);
      saveUsersInLocalStorage();
      Popup.elem.remove();
      BooksContainer.elem.render();
      FindLibraryCard.elem.render();
    };

    this._container.append(headline);
    this._container.append(contentWrap);
  }

  render() {
    this._create();
    return this._container;
  }
}
export default BuyLibraryCard;
