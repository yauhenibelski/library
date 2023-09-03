/* eslint-disable class-methods-use-this */
import Component from '../template/component';
import createElement from '../../utils/createElement';
import Popup from './popup';
import ModalLogin from './ModalLogin';
import App from '../../App';
import User from '../template/user';
import renderPage from '../../utils/renderPage';
import ModalProfile from './ModalProfile';

class DropMenu extends Component {
  constructor() {
    super('div', 'drop-menu');
    DropMenu.open = false;
    DropMenu.elem = Object.assign(this);

    this.header = createElement({ tagName: 'h3', text: App.user.cardNumber || 'Profile' });
    this.logInBtn = createElement({ tagName: 'button', className: 'logIn-btn', text: 'Log In' });
    this.logOut = createElement({ tagName: 'button', className: 'logIn-out', text: 'Log Out' });
    this.myProfileBtn = createElement({ tagName: 'button', className: 'my-profile-btn', text: 'My profile' });
    this.registerBtn = createElement({ tagName: 'button', className: 'register-btn', text: 'Register' });
    this.myProfileBtn = createElement({ tagName: 'button', className: 'my-profile-btn', text: 'My profile' });
    this.logOutBtn = createElement({ tagName: 'button', className: 'log-out-btn', text: 'Log Out' });
  }

  closeMenu() {
    DropMenu.open = false;
    this._container.style.opacity = 0;
    setTimeout(() => { this._container.remove(); }, 100);
  }

  _createMenu() {
    this.logInBtn.onclick = () => {
      Popup.run(new ModalLogin('login').render());
      this.closeMenu();
    };

    this.registerBtn.onclick = () => {
      Popup.run(new ModalLogin('register').render());
      this.closeMenu();
    };

    this.logOut.onclick = () => {
      App.user = new User();
      renderPage();
      this.closeMenu();
    };

    this.myProfileBtn.onclick = () => {
      Popup.run(new ModalProfile().render());
      this.closeMenu();
    };

    this._container.append(this.header);

    if (App.user.cardNumber) {
      this.header.style.fontSize = '11px';

      this._container.append(this.myProfileBtn);
      this._container.append(this.logOut);
    } else {
      this._container.append(this.logInBtn);
      this._container.append(this.registerBtn);
    }
  }

  render() {
    this._container.innerHTML = '';
    this._container.style.opacity = 0;
    this._createMenu();
    setTimeout(() => { this._container.style.opacity = ''; }, 100);
    return this._container;
  }
}

export default DropMenu;
