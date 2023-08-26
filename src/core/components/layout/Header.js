import createElement from '../../utils/createElement';
import Component from '../template/component';
import App from '../../App';
import Burger from '../ui/burger';
import Navigation from './Navigation';

class Header extends Component {
  constructor() {
    super('header');

    this.section = createElement({ tagName: 'section', className: 'header_container' });
    this.navWrapper = createElement({ tagName: 'div', className: 'nav_wrapper' });

    Header.textObject = {
      headline: 'Brooklyn Public Library',
      nLink: ['About', 'Favorites', 'Coffee shop', 'Contacts', 'Library Card'].map((linkName) => {
        const li = createElement({ tagName: 'li' });
        const link = createElement({ tagName: 'a', text: linkName });

        link.href = `#${linkName.toLocaleLowerCase()}`;
        li.append(link);
        return li;
      }),
    };
  }

  _createHeader() {
    const headline = createElement({ tagName: 'h1', text: Header.textObject.headline });
    const profileButton = createElement({ tagName: 'button', className: 'profile-btn' });
    const nav = new Navigation(Header.textObject.nLink).render();
    const { burgerBtn, burgerContainer } = new Burger(Header.textObject.nLink).render();

    profileButton.append(App.profileIcon);

    this.section.append(headline);
    this.section.append(this.navWrapper);
    this.section.append(burgerContainer);

    this.navWrapper.append(nav);
    this.navWrapper.append(profileButton);
    this.navWrapper.append(burgerBtn);

    this._container.append(this.section);
  }

  render() {
    this._createHeader();
    return this._container;
  }
}
export default Header;
