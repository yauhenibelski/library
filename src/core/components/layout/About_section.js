import createElement from '../../utils/createElement';
import Component from '../template/component';
import Headline from '../ui/Headline';
import img1 from '../../../assets/img/image_1.png';
import img2 from '../../../assets/img/image_2.png';
import img3 from '../../../assets/img/image_3.png';
import img4 from '../../../assets/img/image_4.png';
import img5 from '../../../assets/img/image_5.png';
import { changeSlide } from '../../utils/changeSlide';
import getImg from '../../utils/getImg';

class About extends Component {
  constructor() {
    super('section', 'about');
    this._container.id = 'about';
    About.elem = Object.assign(this);
  }

  imgs = [img1, img2, img3, img4, img5].map((src) => getImg(src));

  _createSection() {
    const text = createElement({
      tagName: 'p', text: 'The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside',
    });
    const imageWrapper = createElement({ tagName: 'div', className: 'img-wrapper' });
    const leftBtn = createElement({ tagName: 'button', className: 'leftBtn' });
    const rightBtn = createElement({ tagName: 'button', className: 'rightBtn' });
    const carouselContainer = createElement({ tagName: 'div', className: 'carousel-container' });
    const carouselContainerWrap = createElement({ tagName: 'div', className: 'carousel-container-wrapper' });
    const carouselPaginationWrap = createElement({ tagName: 'div', className: 'carousel-pagination-wrapper' });
    const rangesBtn = this.imgs.map((_, i) => {
      const range = createElement({ tagName: 'div', className: 'range' });
      range.onclick = () => {
        changeSlide(i, imageWrapper, range);
      };
      return range;
    });
    this.imgs.forEach((img, i) => {
      imageWrapper.append(img);
      rangesBtn[About.currentSlideNum].classList.toggle('active');
      carouselPaginationWrap.append(rangesBtn[i]);

      // if (window.innerWidth > 1024 && (i !== 0 && i !== arr.length - 1)) {
      //    rangesBtn[About.currentSlideNum].classList.toggle('active');
      //    carouselPaginationWrap.append rangesBtn[i]);
      // }
      // if (window.innerWidth <= 1024) {
      //    rangesBtn[About.currentSlideNum].classList.toggle('active');
      //    carouselPaginationWrap.append rangesBtn[i]);
      // }
    });

    this._container.append(new Headline('About').render());
    this._container.append(text);

    carouselContainer.append(imageWrapper);

    carouselContainerWrap.append(leftBtn);
    carouselContainerWrap.append(carouselContainer);
    carouselContainerWrap.append(rightBtn);

    this._container.append(carouselContainerWrap);
    this._container.append(carouselPaginationWrap);

    leftBtn.onclick = () => {
      const slideNum = About.currentSlideNum - 1;
      if ((slideNum >= 0 && window.innerWidth < 1024) || slideNum > 0) {
        changeSlide(slideNum, imageWrapper, rangesBtn[slideNum]);
      }
    };
    rightBtn.onclick = () => {
      const slideNum = About.currentSlideNum + 1;
      if (
        (slideNum <= this.imgs.length - 1 && window.innerWidth < 1024)
        || slideNum < this.imgs.length - 1
      ) {
        changeSlide(slideNum, imageWrapper, rangesBtn[slideNum]);
      }
    };
  }

  render() {
    About.currentSlideNum = window.innerWidth > 1024 ? 1 : 0;
    this._container.innerHTML = '';
    this._createSection();

    window.onresize = (e) => {
      const width = e.currentTarget.innerWidth;

      setTimeout(() => {
        if (width === window.innerWidth) this.render();
      }, 100);
    };

    return this._container;
  }
}

export default About;
