import Component from '../components/template/component';
import About from '../components/layout/About_section';
import WelcomeSection from '../components/layout/Welcome_section';
import Favorites from '../components/layout/Favorites_section';
import CoffeeShop from '../components/layout/CoffeeShop_section';
import Contacts from '../components/layout/OurContacts_section';
import LibraryCards from '../components/layout/LibraryCards_section';

class HomePage extends Component {
  constructor() {
    super('main', 'homePage');
    HomePage._container = this._container;
    HomePage.render = this.render;
  }

  render() {
    this._container.innerHTML = '';
    this._container.append(new WelcomeSection().render());
    this._container.append(new About().render());
    this._container.append(new Favorites().render());
    this._container.append(new CoffeeShop().render());
    this._container.append(new Contacts().render());
    this._container.append(new LibraryCards().render());

    return this._container;
  }
}

export default HomePage;
