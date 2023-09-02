import Header from '../components/layout/Header';
import Footer from '../components/layout/footer';
import HomePage from '../pages/HomePage';

const renderPage = () => {
  Header.elem.render();
  HomePage.render();
  Footer.elem.render();
};

export default renderPage;
