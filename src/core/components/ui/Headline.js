import Component from '../template/component';
import createElement from '../../utils/createElement';

class Headline extends Component {
  constructor(headline) {
    super('div', 'headline-wrapper');
    const h2 = createElement({ tagName: 'h2', text: headline });
    const line = createElement({ tagName: 'div', className: 'line' });

    this._container.append(h2);
    this._container.append(line);
  }
}
export default Headline;
