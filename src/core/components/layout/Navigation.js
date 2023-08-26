import Component from '../template/component';
import createElement from '../../utils/createElement';

class Navigation extends Component {
  constructor(links) {
    super('nav');
    this.links = links.map((link) => link.cloneNode(true));
  }

  render() {
    const ul = createElement({ tagName: 'ul' });

    this.links.forEach((link) => ul.append(link));

    this._container.append(ul);
    return this._container;
  }
}
export default Navigation;
