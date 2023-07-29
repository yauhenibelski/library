import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';

class Contacts extends Component {
  constructor() {
    super('section', 'contacts');
    this._container.id = 'contacts';
  }

  _createSection() {
    const contactsWrapper = createElement({ tagName: 'div', className: 'contacts-wrapper' });
    const contactsBlock = createElement({ tagName: 'div', className: 'contacts-block' });
    const map = createElement({ tagName: 'div', className: 'map-block' });
    const headline = new Headline('Our Contacts').render();
    headline.id = 'contacts';

    // Contact Block *****
    // contactsBlock.append(
    //   createElement({ tagName: 'p', text: 'For TTY Service, Please Call (617) 730-2370' }),
    // );
    // contactsBlock.append(
    //   createElement({ tagName: 'p', text: 'Putterham Library: (617) 730-2385' }),
    // );
    // contactsBlock.append(
    //   createElement({ tagName: 'h4', text: 'Senior Staff' }),
    // );
    // contactsBlock.append(
    //   createElement({ tagName: 'p', text: 'Library Director: <b>Amanda Hirst</b>' }),
    // );

    contactsBlock.insertAdjacentHTML('beforeend', `
      <h4>For All Library Inquiries:</h4>
      <p>
        <a href="tel:+6177302370">Please Call (617) 730-2370</a>
      </p>
      <p>
        <a href="tel:+6177302370">For TTY Service, Please Call (617) 730-2370</a>
      </p>
      <p>
        <a href="tel:+6177302385">Putterham Library: (617) 730-2385</a>
      </p>
      <h4>Senior Staff</h4>
      <p><a href="mailto:AmandaHirst@gmail.com">Library Director: <b>Amanda Hirst</b></a></p>
    `);

    contactsWrapper.append(contactsBlock);
    contactsWrapper.append(map);

    this._container.append(headline);
    this._container.append(contactsWrapper);
  }

  render() {
    this._createSection();
    return this._container;
  }
}
export default Contacts;
