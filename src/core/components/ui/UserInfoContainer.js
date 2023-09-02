import createElement from '../../utils/createElement';
import Component from '../template/component';
import visitSVG from '../../../assets/img/visits.svg';
import bonusSVG from '../../../assets/img/bonus.svg';
import bookSVG from '../../../assets/img/book.svg';
import UserInfo from './UserInfo';
import users from '../../users';

class UserInfoContainer extends Component {
  constructor(cardNumber) {
    super('div', 'user-info-container');
    this.currentUser = users.get(cardNumber);
  }

  _createElement() {
    const visitBlock = createElement({ tagName: 'div', className: 'visit-block' });
    const bonuses = createElement({ tagName: 'div', className: 'bonuses-block' });
    const booksBlock = createElement({ tagName: 'div', className: 'books-block' });

    visitBlock.append(new UserInfo('Visits', visitSVG, this.currentUser.visits).render());
    bonuses.append(new UserInfo('Bonuses', bonusSVG, 1240).render());
    booksBlock.append(new UserInfo('Books', bookSVG, `${this.currentUser.books.length}`).render());

    this._container.append(visitBlock);
    this._container.append(bonuses);
    this._container.append(booksBlock);
  }

  render() {
    this._createElement();
    return this._container;
  }
}

export default UserInfoContainer;
