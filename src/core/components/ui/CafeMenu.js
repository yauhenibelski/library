import createElement from '../../utils/createElement';
import Component from '../template/component';

class CafeMenu extends Component {
  constructor({ menu, headline, side }) {
    super('div', 'cafe-menu');
    this.textObj = { menu, headline, side };
    if (side === 'right') {
      this._container.classList.add('right-side');
    } else {
      this._container.classList.add('left-side');
    }
  }

  _createHTML() {
    this._container.append(
      createElement({ tagName: 'h2', text: this.textObj.headline }),
    );

    this.textObj.menu.forEach((offer) => {
      const [dish, price] = offer;
      const offerHTML = createElement({ tagName: 'div', className: 'offer-wrapper' });
      const dishNameHTML = createElement({ tagName: 'h3', text: dish });
      const priceHTML = createElement({ tagName: 'p', text: `$${price}` });
      const line = createElement({ tagName: 'div', className: 'line' });

      offerHTML.append(dishNameHTML);
      offerHTML.append(line);
      offerHTML.append(priceHTML);
      this._container.append(offerHTML);
    });
  }

  render() {
    this._createHTML();
    return this._container;
  }
}
export default CafeMenu;
