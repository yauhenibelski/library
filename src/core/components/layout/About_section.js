import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import img1 from '../../../assets/img/image_1.png';
import img2 from '../../../assets/img/image_2.png';
import img3 from '../../../assets/img/image_3.png';

class About extends Component {
  constructor() {
    super('section', 'about');
  }

  _createSection() {
    const text = createElement({
      tagName: 'p', text: 'The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside',
    });
    const imageWrapper = createElement({ tagName: 'div', className: 'img-wrapper' });
    const carouselPagination = createElement({ tagName: 'div', className: 'carousel-pagination-wrapper' });

    [img1, img2, img3].forEach((src, i) => {
      const img = new Image();
      const range = createElement({ tagName: 'div', className: 'range' });

      if (i < 1) range.classList.add('active');

      img.src = src;
      img.alt = 'img';

      imageWrapper.append(img);
      carouselPagination.append(range);
    });

    this._container.append(new Headline('About').render());
    this._container.append(text);
    this._container.append(imageWrapper);
    this._container.append(carouselPagination);
  }

  render() {
    this._createSection();

    return this._container;
  }
}

export default About;
