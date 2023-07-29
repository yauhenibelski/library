import createElement from '../../utils/createElement';
import Component from '../template/component';
import Book from '../ui/Book';
import Headline from '../ui/Headline';
import books from '../../../assets/books';

class Favorites extends Component {
  constructor() {
    super('section', 'favorites');
    Favorites.bookId = [4];
    this._container.id = 'favorites';
  }

  _createSection() {
    const weatherFilter = createElement({ tagName: 'form', className: 'weather-filter' });
    const booksWrapper = createElement({ tagName: 'div', className: 'books-wrapper' });

    ['Winter', 'Spring', 'Summer', 'Autumn'].forEach((val, i) => {
      const checkBox = createElement({ tagName: 'input' });
      const label = createElement({ tagName: 'label', text: val });
      const inputWrapper = createElement({ tagName: 'div', className: 'weather-input-wrapper' });

      label.setAttribute('for', val.toLocaleLowerCase());

      if (!i) checkBox.checked = true;

      checkBox.setAttribute('type', 'radio');
      checkBox.setAttribute('name', 'weather');
      checkBox.setAttribute('value', val.toLocaleLowerCase());
      checkBox.setAttribute('id', val.toLocaleLowerCase());

      inputWrapper.append(checkBox);
      inputWrapper.append(label);

      weatherFilter.append(inputWrapper);
    });

    this._container.append(new Headline('Favorites').render());
    this._container.append(createElement({ tagName: 'h3', text: 'Pick favorites of season' }));
    this._container.append(weatherFilter);

    books.forEach((book) => booksWrapper.append(new Book(book).render()));

    this._container.append(booksWrapper);
  }

  render() {
    this._createSection();
    return this._container;
  }
}

export default Favorites;
