/* eslint-disable class-methods-use-this */
import Component from '../template/component';
import createElement from '../../utils/createElement';
import Popup from './popup';
import ModalLogin from './ModalLogin';

class DropMenu extends Component {
  elem = {
    header: createElement({ tagName: 'h3', text: 'Profile' }),
    logInBtn: createElement({ tagName: 'button', className: 'logIn-btn', text: 'Log In' }),
    registerBtn: createElement({ tagName: 'button', className: 'register-btn', text: 'Register' }),
    myProfileBtn: createElement({ tagName: 'button', className: 'my-profile-btn', text: 'My profile' }),
    logOutBtn: createElement({ tagName: 'button', className: 'log-out-btn', text: 'Log Out' }),
  };

  constructor() {
    super('div', 'drop-menu');
    DropMenu.open = false;
    DropMenu.elem = Object.assign(this);
  }

  closeMenu() {
    DropMenu.open = false;
    this._container.remove();
  }

  _createMenu() {
    this.elem.logInBtn.onclick = () => {
      Popup.run(new ModalLogin('login').render());
      this.closeMenu();
    };

    this.elem.registerBtn.onclick = () => {
      Popup.run(new ModalLogin('register').render());
      this.closeMenu();
    };

    this._container.append(this.elem.header);
    this._container.append(this.elem.logInBtn);
    this._container.append(this.elem.registerBtn);
  }

  render() {
    this._createMenu();
    return this._container;
  }
}

export default DropMenu;
