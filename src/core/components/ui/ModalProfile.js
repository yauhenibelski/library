import App from '../../App';
import createElement from '../../utils/createElement';
import getImg from '../../utils/getImg';
import Component from '../template/component';
import UserInfoContainer from './UserInfoContainer';
import iconCopy from '../../../assets/img/icon_copy.svg';
import getBookByID from '../../utils/getBookByID';
import ClipboardJS from 'clipboard';

class ModalProfile extends Component {
  constructor() {
    super('div', 'modal-profile-container');
  }

  _createElem() {
    const profileNameWrap = createElement({ tagName: 'div', className: 'profile-name-wrap' });
    const name = createElement({ tagName: 'h4', className: 'profile-name', text: `${App.user.firstName} ${App.user.lastName}` });

    profileNameWrap.append(App.user.icon.cloneNode(true));
    profileNameWrap.append(name);
    this._container.append(profileNameWrap);

    const profileInfoWrap = createElement({ tagName: 'div', className: 'profile-info-wrap' });
    const headline = createElement({ tagName: 'h2', text: 'My profile' });
    const rentedBooksText = createElement({ tagName: 'h3', text: 'Rented books' });
    const rentedBooksWrap = createElement({ tagName: 'ul', className: 'rented-books-wrap' });
    const cardNumberWrap = createElement({ tagName: 'div', className: 'card-number-wrap' });
    const cardText = createElement({ tagName: 'p', text: 'Card number' });
    const cardNumber = createElement({ tagName: 'p', text: `${App.user.cardNumber}` });
    const copyIcon = getImg(iconCopy);

    copyIcon.onclick = () => {
      ClipboardJS.copy(cardNumber.innerText);
      alert('Card number copied to clipboard');
    };

    App.user.books.forEach((bookId) => {
      const book = getBookByID(bookId);
      const li = createElement({ tagName: 'li', text: `${book.name}, ${book.author}` });
      rentedBooksWrap.append(li);
    });

    cardNumberWrap.append(cardText);
    cardNumberWrap.append(cardNumber);
    cardNumber.append(copyIcon);

    profileInfoWrap.append(headline);
    profileInfoWrap.append(new UserInfoContainer(App.user.cardNumber).render());
    profileInfoWrap.append(rentedBooksText);
    profileInfoWrap.append(rentedBooksWrap);
    profileInfoWrap.append(cardNumberWrap);
    this._container.append(profileInfoWrap);
  }

  render() {
    this._createElem();
    return this._container;
  }
}

export default ModalProfile;
