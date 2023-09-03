import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import Footer from './components/layout/footer';
import User from './components/template/user';

const q = {
  books: [],
  card:
null,
  cardNumber:
'a668d5579',
  email:
'1@1',
  firstName:
'john',
  icon:
{},
  lastName:
'doe',
  password:
'11111111',
  visits:
15,
};
class App {
  constructor() {
    App.user = new User(q);
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
