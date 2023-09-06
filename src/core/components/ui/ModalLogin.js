import Component from '../template/component';
import createElement from '../../utils/createElement';
import CustomInput from './customInput';
import Popup from './popup';
import App from '../../App';
import User from '../template/user';
import users from '../../users';
import saveUsersInLocalStorage from '../../utils/saveUsersInLocalStorage';
import renderPage from '../../utils/renderPage';
import getUserEmailOrCartNum from '../../utils/getUserEmailOrCartNum';

class ModalLogin extends Component {
  constructor(value) {
    super('div', 'modal-login');
    this.value = value;
    this.result = { ...App.user };

    this.approveBtn = createElement({ tagName: 'button', className: 'btn' });
    this.headline = createElement({ tagName: 'h3', className: 'custom-input-headline' });
    this.question = createElement({ tagName: 'button', className: 'modal-login-question' });
    this.questionContainer = createElement({ tagName: 'div', className: 'modal-login-question-container' });
    this.offerBtn = createElement({ tagName: 'button', className: 'offerBtn' });
  }

  _saveValidRes(e, prop) {
    if (e.target.validity.valid && e.target.value && e.target.value !== '') {
      this.result[prop] = e.target.value;
      e.target.classList.remove('invalid-custom-input');
    } else {
      this.result[prop] = undefined;
      e.target.classList.add('invalid-custom-input');
    }
  }

  removePopup() {
    Popup.elem.remove();
    this.result = new User();
  }

  login() {
    this.headline.innerText = 'Login';
    this.question.innerText = 'Don’t have an account?';
    this.offerBtn.innerText = 'Register';
    this.approveBtn.innerText = 'Log In';

    this._container.append(this.headline);
    this._container.append(new CustomInput('E-mail or readers card', 'name', (e) => { this._saveValidRes(e, 'cardNumber'); }).render());
    this._container.append(new CustomInput('Password', 'password', (e) => { this._saveValidRes(e, 'password'); }, 8).render());

    this.offerBtn.onclick = () => {
      this.removePopup();
      Popup.run(new ModalLogin('register').render());
    };

    this.approveBtn.onclick = () => {
      const user = getUserEmailOrCartNum(this.result.cardNumber);

      if (user && user.password === this.result.password) {
        user.visits += 1;
        users.set(user.cardNumber, user);
        App.user = new User(users.get(user.cardNumber));
        saveUsersInLocalStorage();
        this.removePopup();
        renderPage();
      } else {
        alert('User not found');
      }
    };
  }

  register() {
    this.headline.innerText = 'Register';
    this.question.innerText = 'Already have an account?';
    this.offerBtn.innerText = 'Login';
    this.approveBtn.innerText = 'Sign Up';

    this._container.append(this.headline);
    this._container.append(new CustomInput('First name', 'name', (e) => { this._saveValidRes(e, 'firstName'); }).render());
    this._container.append(new CustomInput('Last name', 'name', (e) => { this._saveValidRes(e, 'lastName'); }).render());
    this._container.append(new CustomInput('E-mail', 'email', (e) => { this._saveValidRes(e, 'email'); }).render());
    this._container.append(new CustomInput('Password', 'password', (e) => { this._saveValidRes(e, 'password'); }, 8).render());

    this.approveBtn.onclick = () => {
      this.result.cardNumber = Math.random().toString(16).substring(2, 11);
      App.user = new User(this.result);
      users.set(this.result.cardNumber, this.result);
      saveUsersInLocalStorage();
      renderPage();
      this.removePopup();
    };

    this.offerBtn.onclick = () => {
      this.removePopup();
      Popup.run(new ModalLogin('login').render());
    };
  }

  _validInputs() {
    const inputs = this._container.querySelectorAll('input');
    const validInputs = [...inputs].every((elem) => elem.validity.valid);
    const fieldsAreFilled = Object.values(this.result).every((prop) => prop !== undefined && prop !== '');

    if (this.value === 'register') {
      if (validInputs && fieldsAreFilled) this.approveBtn.disabled = false;
      else this.approveBtn.disabled = true;
    }

    if (this.value === 'login') {
      if (this.result.password && this.result.cardNumber) this.approveBtn.disabled = false;
      else this.approveBtn.disabled = true;
    }
  }

  _createElem() {
    this.approveBtn.disabled = true;
    this._container.append(this.approveBtn);
    this._container.append(this.questionContainer);

    this.questionContainer.append(this.question);
    this.questionContainer.append(this.offerBtn);

    this._container.onchange = () => this._validInputs();
    this._container.oninput = () => this._validInputs();
  }

  render() {
    if (this.value === 'register') this.register();
    if (this.value === 'login') this.login();

    this._createElem();
    return this._container;
  }
}
export default ModalLogin;
