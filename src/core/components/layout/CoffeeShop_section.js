import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import CafeMenu from '../ui/CafeMenu';

class CoffeeShop extends Component {
  constructor() {
    super('section', 'coffee-shop');
    this._container.id = 'coffee shop';
  }

  _createSection() {
    const info = createElement({
      tagName: 'p',
      className: 'info_coffee-shop',
      text: `In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation.
    you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.`,
    });

    this._container.append(new Headline('Coffee Shop').render());
    this._container.append(info);

    const menuWrapper = createElement({ tagName: 'div', className: 'menu-wrapper' });

    menuWrapper.append(new CafeMenu({
      headline: 'Coffee & Tea',
      menu: [['Cold Brew Coffee', 3], ['French Press Pot', 5], ['Espresso', 2], ['Cappuccino', 4], ['Hot Tea', 2], ['Cold Tea', 2]],
      side: 'left',
    }).render());
    menuWrapper.append(new CafeMenu({
      headline: 'Desserts & Cakes',
      menu: [['Forest Gateau', 16], ['Blue Moon', 16], ['Truffle Cake', 15], ['Chocolate Cake', 18], ['Poet’s Dream Cake', 16], ['Pineapple Cake', 14]],
      side: 'right',
    }).render());

    this._container.append(menuWrapper);
  }

  render() {
    this._createSection();
    return this._container;
  }
}
export default CoffeeShop;
