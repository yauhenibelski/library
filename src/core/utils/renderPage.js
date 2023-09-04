import Header from '../components/layout/Header';
import Footer from '../components/layout/footer';
import HomePage from '../pages/HomePage';

const renderPage = () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style = '';
    Header.elem.render();
    HomePage.elem.render();
    Footer.elem.render();
  }, 350);
};

export default renderPage;
