import Component from '../template/component';
import createElement from '../../utils/createElement';
import CustomInput from './customInput';

class ModalLogin extends Component {
  constructor(value) {
    super('div', 'modal-login');
    this.signUpBtn = createElement({ tagName: 'button', className: 'btn', text: 'Log In' });
    this.headline = createElement({ tagName: 'h3', className: 'custom-input-headline' });
    this.question = createElement({ tagName: 'button', className: 'modal-login-question' });
    this.questionContainer = createElement({ tagName: 'div', className: 'modal-login-question-container' });
    this.offerBtn = createElement({ tagName: 'button', className: 'offerBtn' });
    this.value = value;
  }

  login() {
    this.headline.innerText = 'Login';
    this.question.innerText = 'Don’t have an account?';
    this.offerBtn.innerText = 'Register';

    this._container.append(this.headline);
    this._container.append(new CustomInput('E-mail or readers card', 'email').render());
    this._container.append(new CustomInput('Password', 'password').render());
  }

  register() {
    this.headline.innerText = 'Register';
    this.question.innerText = 'Already have an account?';
    this.offerBtn.innerText = 'Login';

    this._container.append(this.headline);
    this._container.append(new CustomInput('First name', 'text').render());
    this._container.append(new CustomInput('Last name', 'text').render());
    this._container.append(new CustomInput('E-mail', 'email').render());
    this._container.append(new CustomInput('Password', 'password').render());
  }

  _createElem() {
    this._container.append(this.signUpBtn);
    this._container.append(this.questionContainer);

    this.questionContainer.append(this.question);
    this.questionContainer.append(this.offerBtn);
  }

  render() {
    if (this.value === 'register') this.register();
    if (this.value === 'login') this.login();

    this._createElem();
    return this._container;
  }
}
export default ModalLogin;
