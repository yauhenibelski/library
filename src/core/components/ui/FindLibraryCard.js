/* eslint-disable max-len */
/* eslint-disable no-return-assign */
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
    const h3 = createElement({ tagName: 'h3', text: 'Brooklyn Public Library' });
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

    loginContainer.append(h3);
    loginContainer.append(textInput);
    loginContainer.append(numInput);

    this._container.append(loginContainer);

    if (FindLibraryCard.showInfo) {
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
        } else {
          alert('Wrong name!!!');
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
