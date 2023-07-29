import createElement from '../../utils/createElement';
import Component from '../template/component';

class Login extends Component {
  constructor() {
    super('div', 'login-wrapper');
  }

  _createComponent() {
    const h3 = createElement({ tagName: 'h3', text: 'Brooklyn Public Library' });
    const loginContainer = createElement({ tagName: 'div', className: 'login-container' });
    const btn = createElement({ tagName: 'button', text: 'Check the card', className: 'btn' });
    const textInput = createElement({ tagName: 'input', className: 'login-name' });
    textInput.type = 'text';
    textInput.placeholder = 'Reader\'s name';

    const numInput = createElement({ tagName: 'input', className: 'login-num' });
    numInput.type = 'number';
    numInput.placeholder = 'Card number';

    loginContainer.append(h3);
    loginContainer.append(textInput);
    loginContainer.append(numInput);

    this._container.append(loginContainer);
    this._container.append(btn);
  }

  render() {
    this._createComponent();
    return this._container;
  }
}
export default Login;
