/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */

import About from '../components/layout/About_section';

export const changeSlide = (currentNumSlide, container, range) => {
  const currentImg = container.children[currentNumSlide];
  const rangeContainer = range.parentElement;
  const imgParams = {
    width: currentImg.offsetWidth,
    marginRight: parseInt(
      window.getComputedStyle(container.children[currentNumSlide]).marginRight,
      10,
    ),
  };

  container.style.cssText = `
    transform: translateX(-${(imgParams.marginRight + imgParams.width) * (currentNumSlide - 1)}px);
  `;

  Array.from(rangeContainer.children).forEach((elem) => elem.classList.remove('active'));
  range.classList.add('active');

  About.currentSlideNum = currentNumSlide;
};
