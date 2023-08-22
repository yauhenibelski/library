/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */

import About from '../components/layout/About_section';

export const changeSlide = (currentNumSlide, container, range) => {
  const rangeContainer = range.parentElement;
  const currentImg = container.children[currentNumSlide];
  const imgParams = {
    width: currentImg.offsetWidth,
    marginRight: parseInt(
      window.getComputedStyle(container.children[currentNumSlide]).marginRight,
      10,
    ),
  };

  const shiftPx = window.innerWidth > 1024 ? currentNumSlide - 1 : currentNumSlide;

  container.style.cssText = `
      transform: translateX(-${(imgParams.marginRight + imgParams.width) * (shiftPx)}px);
    `;

  Array.from(rangeContainer.children).forEach((elem) => elem.classList.remove('active'));
  range.classList.add('active');

  About.currentSlideNum = currentNumSlide;
};
