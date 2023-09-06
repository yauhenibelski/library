import getImg from '../../utils/getImg';
import profileIcon from '../../../assets/img/icon_profile.svg';
import createElement from '../../utils/createElement';

class User {
  constructor(user = {}) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.password = user.password;
    this.email = user.email;
    this.visits = 1;
    this.books = user.books || [];
    this.card = user.card || null;
    this.cardNumber = user.cardNumber || null;
    this.icon = user.firstName
      ? createElement({
        tagName: 'div',
        className: 'user-initials-btn',
        text: `${user.firstName[0]}${user.lastName[0]}`,
      })
      : getImg(profileIcon);
  }
}

export default User;
