import Component from '../template/component';
import createElement from '../../utils/createElement';

class Burger extends Component {
  constructor(links) {
    super('div', 'burger-wrapper');
    this.links = links.map((link) => link.cloneNode(true));
    this.button = createElement({ tagName: 'button', className: 'burger-btn' });
    this.burger = createElement({ tagName: 'div', className: 'burger' });
  }

  _createBurger() {
    this.links.forEach((li) => this.burger.append(li));

    this._container.append(this.burger);

    this.button.onclick = () => {
      this.burger.classList.toggle('burger-active');
      this.button.classList.toggle('burger-btn-active');
      document.body.onclick = null;

      setTimeout(() => {
        document.body.onclick = () => {
          if (this.burger.classList.contains('burger-active')) {
            this.burger.classList.toggle('burger-active');
            this.button.classList.toggle('burger-btn-active');
          }
          document.body.onclick = null;
        };
      });
    };
  }

  render() {
    this._createBurger();
    return {
      burgerBtn: this.button,
      burgerContainer: this._container,
    };
  }
}

export default Burger;
