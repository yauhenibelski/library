import Component from '../template/component';
import createElement from '../../utils/createElement';
import DropMenu from './dropMenu';

class Burger extends Component {
  constructor(links) {
    super('div', 'burger-wrapper');
    Burger.open = false;
    Burger.elem = Object.assign(this);
    this.links = links.map((link) => link.cloneNode(true));
    this.button = createElement({ tagName: 'button', className: 'burger-btn' });
    this.burger = createElement({ tagName: 'div', className: 'burger' });
  }

  _createBurger() {
    this.links.forEach((li) => this.burger.append(li));

    this._container.append(this.burger);

    this.button.onclick = () => {
      if (DropMenu.open) {
        DropMenu.elem._container.remove();
        DropMenu.open = false;
      }

      if (Burger.open) {
        this.closeBurger();
        document.body.onclick = null;
      } else {
        this.openBurger();

        setTimeout(() => {
          document.body.onclick = () => {
            if (Burger.open) this.closeBurger();
            document.body.onclick = null;
          };
        });
      }
    };
  }

  openBurger() {
    this.burger.classList.add('burger-active');
    this.button.classList.add('burger-btn-active');
    Burger.open = true;
  }

  closeBurger() {
    this.burger.classList.remove('burger-active');
    this.button.classList.remove('burger-btn-active');
    Burger.open = false;
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
