const getImg = (src) => {
  const img = new Image();
  img.src = src;
  img.alt = 'img';
  return img;
};
export default getImg;
