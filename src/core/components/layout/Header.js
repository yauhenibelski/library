/* eslint-disable max-len */
import createElement from '../../utils/createElement';
import Component from '../template/component';
import App from '../../App';
import Burger from '../ui/burger';
import Navigation from './Navigation';
import DropMenu from '../ui/dropMenu';

class Header extends Component {
  constructor() {
    super('header');
    Header.elem = Object.assign(this);

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
    const navWrapper = createElement({ tagName: 'div', className: 'nav_wrapper' });
    const headline = createElement({ tagName: 'h1', text: Header.textObject.headline });
    const profileButton = createElement({ tagName: 'button', className: 'profile-btn' });
    const profileButtonWrap = createElement({ tagName: 'div', className: 'profile-btn-wrap' });
    const nav = new Navigation(Header.textObject.nLink).render();
    const { burgerBtn, burgerContainer } = new Burger(Header.textObject.nLink).render();

    profileButtonWrap.onclick = () => {
      console.log(App.user);
      if (DropMenu.open) {
        DropMenu._container.remove();
        DropMenu.open = false;
        document.body.onclick = null;
      } else {
        profileButtonWrap.append(new DropMenu().render());
        DropMenu.open = true;

        setTimeout(() => {
          document.body.onclick = (elem) => {
            if (elem.target === DropMenu._container || elem.target.parentElement === DropMenu._container) {
              return;
            }
            DropMenu._container.remove();
            DropMenu.open = false;
            document.body.onclick = null;
          };
        });
      }
    };

    profileButton.append(App.user.icon);
    profileButtonWrap.append(profileButton);

    section.append(headline);
    section.append(navWrapper);
    section.append(burgerContainer);

    navWrapper.append(nav);
    navWrapper.append(profileButtonWrap);
    navWrapper.append(burgerBtn);

    this._container.append(section);
  }

  render() {
    this._container.innerHTML = '';
    this._createHeader();
    return this._container;
  }
}
export default Header;
