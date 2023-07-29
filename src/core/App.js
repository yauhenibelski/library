import Header from './components/layout/Header';
import profileIcon from '../assets/img/icon_profile.svg';
import HomePage from './pages/HomePage';
import Footer from './components/layout/footer';

class App {
  constructor() {
    this._container = document.body;

    App.profileIcon = new Image();
    App.profileIcon.src = profileIcon;
    App.profileIcon.alt = 'Profile icon';
    App.userName = 'Username';

    this._elements = {
      header: new Header().render(),
      homePage: new HomePage().render(),
      footer: new Footer().render(),
    };
  }

  render() {
    this._container.append(this._elements.header);
    this._container.append(this._elements.homePage);
    this._container.append(this._elements.footer);
  }
}

export default App;
