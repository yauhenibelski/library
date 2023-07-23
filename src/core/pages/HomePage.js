import WelcomeSection from '../components/Welcome_section.';
import Component from '../components/template/component';

class HomePage extends Component {
  constructor() {
    super('main', 'homePage');
  }

  render() {
    this._container.append(new WelcomeSection().render());

    return this._container;
  }
}

export default HomePage;
