import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import img1 from '../../../assets/img/image_1.png';
import img2 from '../../../assets/img/image_2.png';
import img3 from '../../../assets/img/image_3.png';
import img4 from '../../../assets/img/image_4.png';
import img5 from '../../../assets/img/image_5.png';
import { changeSlide } from '../../utils/changeSlide';

class About extends Component {
  constructor() {
    super('section', 'about');
    this._container.id = 'about';
    About.currentSlideNum = 1;
  }

  imgs = [img1, img2, img3, img4, img5].map((src) => {
    const img = new Image();
    img.src = src;
    img.alt = 'img';

    return img;
  });

  _elem = {
    text: createElement({
      tagName: 'p', text: 'The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside',
    }),
    imageWrapper: createElement({ tagName: 'div', className: 'img-wrapper' }),
    leftBtn: createElement({ tagName: 'button', className: 'leftBtn' }),
    rightBtn: createElement({ tagName: 'button', className: 'rightBtn' }),
    carouselContainer: createElement({ tagName: 'div', className: 'carousel-container' }),
    carouselContainerWrap: createElement({ tagName: 'div', className: 'carousel-container-wrapper' }),
    carouselPaginationWrap: createElement({ tagName: 'div', className: 'carousel-pagination-wrapper' }),
    rangesBtn: this.imgs.map((_, i) => {
      const range = createElement({ tagName: 'div', className: 'range' });
      range.onclick = () => {
        changeSlide(i, this._elem.imageWrapper, range);
      };
      return range;
    }),
  };

  _createSection() {
    this.imgs.forEach((img, i, arr) => {
      this._elem.imageWrapper.append(img);

      if (window.innerWidth > 1024 && (i !== 0 && i !== arr.length - 1)) {
        if (About.currentSlideNum === i) {
          this._elem.rangesBtn[i].classList.toggle('active');
        }
        this._elem.carouselPaginationWrap.append(this._elem.rangesBtn[i]);
      }
    });
    this._elem.leftBtn.onclick = () => {
      const slideNum = About.currentSlideNum - 1;
      if (slideNum >= 1) {
        changeSlide(slideNum, this._elem.imageWrapper, this._elem.rangesBtn[slideNum]);
      }
    };
    this._elem.rightBtn.onclick = () => {
      const slideNum = About.currentSlideNum + 1;
      if (slideNum < this.imgs.length - 1) {
        changeSlide(slideNum, this._elem.imageWrapper, this._elem.rangesBtn[slideNum]);
      }
    };

    this._container.append(new Headline('About').render());
    this._container.append(this._elem.text);

    this._elem.carouselContainer.append(this._elem.imageWrapper);

    this._elem.carouselContainer.append(this._elem.leftBtn);
    this._elem.carouselContainerWrap.append(this._elem.carouselContainer);
    this._elem.carouselContainer.append(this._elem.rightBtn);

    this._container.append(this._elem.carouselContainerWrap);
    this._container.append(this._elem.carouselPaginationWrap);
  }

  render() {
    this._createSection();

    return this._container;
  }
}

export default About;
