import createElement from '../../utils/createElement';
import Component from '../template/component';
import App from '../../App';
import Burger from '../ui/burger';

class Header extends Component {
  constructor() {
    super('header');

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
    const section = createElement({ tagName: 'section', className: 'header_container' });
    const headline = createElement({ tagName: 'h1', text: Header.textObject.headline });
    const navWrapper = createElement({ tagName: 'div', className: 'nav_wrapper' });
    const nav = createElement({ tagName: 'nav' });
    const ul = createElement({ tagName: 'ul' });
    const profileButton = createElement({ tagName: 'button', className: 'profile-btn' });

    Header.textObject.nLink.forEach((li) => ul.append(li));

    const { burgerBtn, burgerContainer } = new Burger(Header.textObject.nLink).render();

    profileButton.append(App.profileIcon);
    section.append(headline);
    section.append(navWrapper);
    nav.append(ul);
    navWrapper.append(nav);
    navWrapper.append(profileButton);
    navWrapper.append(burgerBtn);

    section.append(burgerContainer);

    this._container.append(section);
  }

  render() {
    this._createHeader();
    return this._container;
  }
}
export default Header;
