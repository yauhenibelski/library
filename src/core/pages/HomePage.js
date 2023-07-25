import Component from '../components/template/component';
import About from '../components/layout/About_section';
import WelcomeSection from '../components/layout/Welcome_section';
import Favorites from '../components/layout/Favorites_section';

class HomePage extends Component {
  constructor() {
    super('main', 'homePage');
  }

  render() {
    this._container.append(new WelcomeSection().render());
    this._container.append(new About().render());
    this._container.append(new Favorites().render());

    return this._container;
  }
}

export default HomePage;
