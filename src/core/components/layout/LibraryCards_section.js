import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import Login from '../ui/Login';
import ModalLogin from '../ui/ModalLogin';
import Popup from '../ui/popup';

class LibraryCards extends Component {
  constructor() {
    super('section', 'library-cards');
    this._container.id = 'library card';
  }

  _createLogin() {
    const loginContainer = createElement({ tagName: 'div', className: 'login-container_library-cards' });
    const h3 = createElement({ tagName: 'h3', text: 'Find your Library card', className: 'library-card-text' });

    loginContainer.append(h3);
    loginContainer.append(new Login().render());

    this._container.append(new Headline('Digital Library Cards').render());
    return loginContainer;
  }

  _createInfo() {
    const infoContainer = createElement({ tagName: 'div', className: 'info-container_library-cards' });
    const h3 = createElement({ tagName: 'h3', text: 'Get a reader card', className: 'headline-text_info-container' });
    const text = createElement({ tagName: 'p', text: 'You will be able to see a reader card after logging into account or you can register a new account' });
    const buttons = createElement({ tagName: 'div', className: 'btn-container_info' });
    const signUpBtn = createElement({ tagName: 'button', className: 'btn', text: 'Sign Up' });
    const loginBtn = createElement({ tagName: 'button', className: 'btn', text: 'Log in' });

    signUpBtn.onclick = () => Popup.run(new ModalLogin('register').render());
    loginBtn.onclick = () => Popup.run(new ModalLogin('login').render());

    buttons.append(signUpBtn);
    buttons.append(loginBtn);

    infoContainer.append(h3);
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
