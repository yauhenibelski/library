import createElement from '../../utils/createElement';
import Component from '../template/component';

class WelcomeSection extends Component {
  constructor() {
    super('section', 'welcome');
  }

  _createSection() {
    const textWrapper = createElement({ tagName: 'div', className: 'text-wrapper' });
    textWrapper.insertAdjacentHTML('beforeend', `
      <p>Welcome</p>
      <br>
      <p>to the Brooklyn</p>
      <br>
      <p>Library</p>
    `);

    this._container.append(textWrapper);
  }

  render() {
    this._createSection();
    return this._container;
  }
}

export default WelcomeSection;
