import Component from '../template/component';
import createElement from '../../utils/createElement';
import getImg from '../../utils/getImg';
import App from '../../App';
import Popup from './popup';
import BuyLibraryCard from './ModalBuyLibraryCard';
import ModalLogin from './ModalLogin';

class Book extends Component {
  constructor(book) {
    super('div', 'book');
    this._book = book;
  }

  _createBook() {
    const hasBook = App.user.books.includes(this._book.id);
    const headline = createElement({ tagName: 'h3', className: 'headline_book', text: 'Staff Picks' });
    const bookName = createElement({ tagName: 'h3', className: 'book-name_book', text: this._book.name });
    const author = createElement({ tagName: 'h3', className: 'book-author_book', text: `By ${this._book.author}` });
    const description = createElement({ tagName: 'p', className: 'description_book', text: this._book.description });
    const btn = createElement({ tagName: 'button', className: 'btn', text: hasBook ? 'Own' : 'Buy' });

    if (hasBook) {
      btn.classList.add('active-btn');
      btn.disabled = true;
    }

    btn.onclick = () => {
      if (App.user.cardNumber) Popup.run(new BuyLibraryCard(this._book).render());
      else Popup.run(new ModalLogin('login').render());
    };

    const cover = getImg(this._book.src);
    cover.classList.add('cover');

    this._container.append(headline);
    this._container.append(bookName);
    this._container.append(author);
    this._container.append(description);
    this._container.append(btn);
    this._container.append(cover);
  }

  render() {
    this._createBook();
    setTimeout(() => this._container.classList.toggle('book-active'), 100);
    return this._container;
  }
}

export default Book;
