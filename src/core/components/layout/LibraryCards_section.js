import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import FindLibraryCard from '../ui/FindLibraryCard';
import ModalLogin from '../ui/ModalLogin';
import Popup from '../ui/popup';
import App from '../../App';
import ModalProfile from '../ui/ModalProfile';

class LibraryCards extends Component {
  constructor() {
    super('section', 'library-cards');
    this._container.id = 'library card';
  }

  _createLogin() {
    const loginContainer = createElement({ tagName: 'div', className: 'login-container_library-cards' });
    const h3 = createElement({
      tagName: 'h3',
      text: App.user.cardNumber ? 'Your Library card' : 'Find your Library card',
      className: 'library-card-text',
    });
    loginContainer.append(h3);
    loginContainer.append(new FindLibraryCard().render());

    this._container.append(new Headline('Digital Library Cards').render());
    return loginContainer;
  }

  _createInfo() {
    const infoContainer = createElement({ tagName: 'div', className: 'info-container_library-cards' });
    const headline = createElement({ tagName: 'h3', className: 'headline-text_info-container' });
    const text = createElement({ tagName: 'p' });
    const buttons = createElement({ tagName: 'div', className: 'btn-container_info' });
    const signUpBtn = createElement({ tagName: 'button', className: 'btn', text: 'Sign Up' });
    const loginBtn = createElement({ tagName: 'button', className: 'btn', text: 'Log in' });
    const profileBtn = createElement({ tagName: 'button', className: 'btn', text: 'Profile' });

    infoContainer.append(headline);

    if (App.user.cardNumber) {
      headline.innerText = 'Visit your profile';
      text.innerText = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
      profileBtn.onclick = () => Popup.run(new ModalProfile().render());

      buttons.append(profileBtn);
    } else {
      headline.innerText = 'Get a reader card';
      signUpBtn.onclick = () => Popup.run(new ModalLogin('register').render());
      loginBtn.onclick = () => Popup.run(new ModalLogin('login').render());

      text.innerText = 'You will be able to see a reader card after logging into account or you can register a new account';

      buttons.append(signUpBtn);
      buttons.append(loginBtn);
    }

    infoContainer.append(text);
    infoContainer.append(buttons);

    this._container.append(infoContainer);
    return infoContainer;
  }

  render() {
    const libraryCardsContainer = createElement({ tagName: 'div', className: 'library-cards_container' });
    libraryCardsContainer.append(this._createLogin());
    libraryCardsContainer.append(this._createInfo());
    this._container.append(libraryCardsContainer);

    return this._container;
  }
}
export default LibraryCards;
