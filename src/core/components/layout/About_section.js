import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import img1 from '../../../assets/img/image_1.png';
import img2 from '../../../assets/img/image_2.png';
import img3 from '../../../assets/img/image_3.png';

class About extends Component {
  constructor() {
    super('section', 'about');
    this._container.id = 'about';
  }

  _createSection() {
    const text = createElement({
      tagName: 'p', text: 'The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside',
    });
    const carouselContainer = createElement({ tagName: 'div', className: 'carousel-container' });
    const imageWrapper = createElement({ tagName: 'div', className: 'img-wrapper' });
    const carouselPagination = createElement({ tagName: 'div', className: 'carousel-pagination-wrapper' });
    const leftBtn = createElement({ tagName: 'button', className: 'leftBtn' });
    const rightBtn = createElement({ tagName: 'button', className: 'rightBtn' });

    [img3, img2, img1, null, null].forEach((src, i) => {
      const img = new Image();
      const range = createElement({ tagName: 'div', className: 'range' });

      if (src) {
        img.src = src;
        img.alt = 'img';

        imageWrapper.append(img);
      }

      carouselPagination.append(range);
      if (i < 1) range.classList.add('active');
    });

    this._container.append(new Headline('About').render());
    this._container.append(text);
    carouselContainer.append(leftBtn);
    carouselContainer.append(imageWrapper);
    carouselContainer.append(rightBtn);
    this._container.append(carouselContainer);
    this._container.append(carouselPagination);
  }

  render() {
    this._createSection();

    return this._container;
  }
}

export default About;
