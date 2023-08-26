import Component from '../template/component';
import books from '../../../assets/books';
import Book from './Book';
import Favorites from '../layout/Favorites_section';

class BooksContainer extends Component {
  constructor() {
    super('div', 'books-wrapper');
    BooksContainer.render = this.render;
    BooksContainer._container = this._container;
  }

  render() {
    this._container.innerHTML = '';

    books.filter((book) => book.value === Favorites.value)
      .forEach((book) => this._container.append(new Book(book).render()));

    return this._container;
  }
}
export default BooksContainer;
