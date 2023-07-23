import createElement from '../utils/createElement';
import Component from './template/component';
import App from '../App';

class Header extends Component {
  constructor() {
    super('header');
    Header.textObject = {
      headline: 'Brooklyn Public Library',
      nLink: ['About', 'Favorites', 'Coffee shop', 'Contacts', 'Library Card'],
    };
  }

  _createHeader() {
    const section = createElement({ tagName: 'section', className: 'header_container' });
    const headline = createElement({ tagName: 'h1', text: Header.textObject.headline });
    const navWrapper = createElement({ tagName: 'div', className: 'nav_wrapper' });
    const nav = createElement({ tagName: 'nav' });
    const profileButton = createElement({ tagName: 'button', className: 'profile-btn' });

    Header.textObject.nLink.forEach((linkName) => {
      const link = createElement({ tagName: 'a', text: linkName });
      link.href = `#${linkName.toLocaleLowerCase()}`;
      nav.append(link);
    });

    profileButton.append(App.profileIcon);

    section.append(headline);
    section.append(navWrapper);

    navWrapper.append(nav);
    navWrapper.append(profileButton);

    this._container.append(section);
  }

  render() {
    this._createHeader();
    return this._container;
  }
}
export default Header;
