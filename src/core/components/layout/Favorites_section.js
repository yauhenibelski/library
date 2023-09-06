import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import BooksContainer from '../ui/BooksContainer';
import About from './About_section';

class Favorites extends Component {
  constructor() {
    super('section', 'favorites');
    Favorites.bookId = [];
    Favorites.value = 'winter';
    this._container.id = 'favorites';
  }

  _createSection() {
    const weatherFilter = createElement({ tagName: 'form', className: 'weather-filter' });
    weatherFilter.onchange = (w) => {
      Favorites.value = w.target.value;
      Array.from(BooksContainer.elem._container.children).forEach((elem) => elem.classList.toggle('book-active'));
      setTimeout(() => { BooksContainer.elem.render(); }, 100);
      About.elem.render();
    };

    ['Winter', 'Spring', 'Summer', 'Autumn'].forEach((val) => {
      const checkBox = createElement({ tagName: 'input' });
      const label = createElement({ tagName: 'label', text: val });
      const inputWrapper = createElement({ tagName: 'div', className: 'weather-input-wrapper' });

      label.setAttribute('for', val.toLocaleLowerCase());

      checkBox.setAttribute('type', 'radio');
      checkBox.setAttribute('name', 'weather');
      checkBox.setAttribute('value', val.toLocaleLowerCase());
      checkBox.setAttribute('id', val.toLocaleLowerCase());

      if (Favorites.value === checkBox.value) checkBox.checked = true;

      inputWrapper.append(checkBox);
      inputWrapper.append(label);

      weatherFilter.append(inputWrapper);
    });

    this._container.append(new Headline('Favorites').render());
    this._container.append(createElement({ tagName: 'h3', text: 'Pick favorites of season' }));
    this._container.append(weatherFilter);

    this._container.append(new BooksContainer().render());
  }

  render() {
    this._createSection();
    return this._container;
  }
}

export default Favorites;
