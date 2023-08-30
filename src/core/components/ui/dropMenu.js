import Component from '../template/component';
import createElement from '../../utils/createElement';

class DropMenu extends Component {
  textObject = {
    header: createElement({ tagName: 'h3', text: 'Profile' }),
    logInBtn: createElement({ tagName: 'button', className: 'logIn-btn', text: 'Log In' }),
    registerBtn: createElement({ tagName: 'button', className: 'register-btn', text: 'Register' }),
    myProfileBtn: createElement({ tagName: 'button', className: 'my-profile-btn', text: 'My profile' }),
    logOutBtn: createElement({ tagName: 'button', className: 'log-out-btn', text: 'Log Out' }),
  };

  constructor() {
    super('div', 'drop-menu');
    DropMenu.open = false;
    DropMenu._container = this._container;
  }

  _createMenu() {
    this._container.append(this.textObject.header);
    this._container.append(this.textObject.logInBtn);
    this._container.append(this.textObject.registerBtn);
  }

  render() {
    this._createMenu();
    return this._container;
  }
}

export default DropMenu;
