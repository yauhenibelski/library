import Header from './components/Header';
import profileIcon from '../assets/img/icon_profile.svg';

class App {
  constructor() {
    this._container = document.body;

    App.profileIcon = new Image();
    App.profileIcon.src = profileIcon;
    App.userName = 'Username';

    this._elements = {
      header: new Header().render(),
    };
  }

  render() {
    this._container.append(this._elements.header);
  }
}

export default App;
