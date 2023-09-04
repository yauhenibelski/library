/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import App from '../../App';
import users from '../../users';
import createElement from '../../utils/createElement';
import Component from '../template/component';
import UserInfoContainer from './UserInfoContainer';

class FindLibraryCard extends Component {
  constructor() {
    super('div', 'findLibraryCard-wrapper');
    FindLibraryCard.elem = Object.assign(this);
    FindLibraryCard.inputValue = {
      firstName: '',
      cardNumber: '',
    };
    FindLibraryCard.showInfo = false;
  }

  _createComponent() {
    const headline = createElement({ tagName: 'h3', text: 'Brooklyn Public Library' });
    const loginContainer = createElement({ tagName: 'div', className: 'findLibraryCard-container' });
    const textInput = createElement({ tagName: 'input', className: 'findLibraryCard-name' });
    const numInput = createElement({ tagName: 'input', className: 'findLibraryCard-num' });
    const btn = createElement({ tagName: 'button', text: 'Check the card', className: 'btn' });
    textInput.onchange = (e) => FindLibraryCard.inputValue.firstName = e.target.value;
    numInput.onchange = (e) => FindLibraryCard.inputValue.cardNumber = e.target.value;

    textInput.type = 'name';
    textInput.placeholder = 'Reader\'s name';
    textInput.value = FindLibraryCard.inputValue.firstName;

    numInput.type = 'name';
    numInput.placeholder = 'Card number';
    numInput.value = FindLibraryCard.inputValue.cardNumber;

    loginContainer.append(headline);
    loginContainer.append(textInput);
    loginContainer.append(numInput);

    this._container.append(loginContainer);

    if (FindLibraryCard.showInfo || App.user.cardNumber) {
      if (App.user.cardNumber) {
        FindLibraryCard.inputValue.cardNumber = App.user.cardNumber;

        textInput.value = App.user.firstName;
        numInput.value = App.user.cardNumber;
        textInput.oninput = () => textInput.value = App.user.firstName;
        numInput.oninput = () => numInput.value = App.user.cardNumber;
      }

      this._container.append(new UserInfoContainer(FindLibraryCard.inputValue.cardNumber).render());

      textInput.classList.add('findLibrary-text-active');
      numInput.classList.add('findLibrary-text-active');
    } else {
      this._container.append(btn);
    }

    btn.onclick = () => {
      if (users.has(FindLibraryCard.inputValue.cardNumber)) {
        const userName = users.get(FindLibraryCard.inputValue.cardNumber).firstName;

        if (FindLibraryCard.inputValue.firstName.toLocaleLowerCase() === userName.toLocaleLowerCase()) {
          FindLibraryCard.showInfo = true;
          FindLibraryCard.elem.render();

          setTimeout(() => {
            FindLibraryCard.showInfo = false;
            FindLibraryCard.inputValue = {
              firstName: '',
              cardNumber: '',
            };
            FindLibraryCard.elem.render();
          }, 10000);
        }
      }
    };
  }

  render() {
    this._container.innerHTML = '';
    this._createComponent();
    return this._container;
  }
}
export default FindLibraryCard;
