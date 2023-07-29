import Component from '../template/component';
import createElement from '../../utils/createElement';
import Favorites from '../layout/Favorites_section';

class Book extends Component {
  constructor(book) {
    super('div', 'book');
    this._book = book;
  }

  _createBook() {
    const headline = createElement({ tagName: 'h3', className: 'headline_book', text: 'Staff Picks' });
    const bookName = createElement({ tagName: 'h3', className: 'book-name_book', text: this._book.name });
    const author = createElement({ tagName: 'h3', className: 'book-author_book', text: `By ${this._book.author}` });
    const description = createElement({ tagName: 'p', className: 'description_book', text: this._book.description });
    const btnName = Favorites.bookId.includes(this._book.id) ? 'Own' : 'Buy';
    const btn = createElement({ tagName: 'button', className: 'btn', text: btnName });

    if (Favorites.bookId.includes(this._book.id)) {
      btn.disabled = true;
      btn.classList.add('active-btn');
    }

    const cover = new Image();
    cover.classList.add('cover');
    cover.src = this._book.src;
    cover.alt = 'cover';

    this._container.append(headline);
    this._container.append(bookName);
    this._container.append(author);
    this._container.append(description);
    this._container.append(btn);
    this._container.append(cover);
  }

  render() {
    this._createBook();
    return this._container;
  }
}

export default Book;
