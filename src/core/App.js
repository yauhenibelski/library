import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import Footer from './components/layout/footer';
import User from './components/template/user';

class App {
  constructor() {
    App.user = new User();
    this._container = document.body;

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
