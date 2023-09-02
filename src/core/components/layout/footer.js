/* eslint-disable indent */
import Component from '../template/component';
import createElement from '../../utils/createElement';
import instagramSvg from '../../../assets/img/instagram.svg';
import facebookSvg from '../../../assets/img/facebook.svg';
import twitterSvg from '../../../assets/img/twitter.svg';
import App from '../../App';

class Footer extends Component {
  constructor() {
    super('footer');
    Footer.elem = Object.assign(this);
  }

  _createFooter() {
    const footerContainer = createElement({ tagName: 'div', className: 'footer-container' });
    const socialLinkContainer = createElement({ tagName: 'div', className: 'socialLink-container_footer' });
    const infoContainer = createElement({ tagName: 'div', className: 'info-container_footer' });
    const contact = createElement({ tagName: 'div', className: 'contact-container_footer' });

    const address = createElement({ tagName: 'p', text: '286 Cadman Plaza, New York,<br> NY 11238, United States' });
    const addressLink = createElement({ tagName: 'a' });
    addressLink.append(address);
    addressLink.href = 'https://goo.gl/maps/URNfE9LFHjwYspUSA';

    const workTime = createElement({ tagName: 'div', className: 'work-time-container_footer' });
    workTime.insertAdjacentHTML('beforeend', `
      <p>
        Mon - Fri
        <br>
        08:00 am - 07:00 pm
      </p>
      <p>
        Sat - Sun
        <br>
        10:00 am - 06:00 pm
      </p>
    `);

    [[twitterSvg, 'twitter'], [instagramSvg, 'instagram'], [facebookSvg, 'facebook']].forEach((social) => {
      const [svg, name] = social;
      const link = createElement({ tagName: 'a' });
      link.href = `https://www.${name}.com`;

      const img = new Image();
      img.src = svg;
      img.alt = 'social img';

      link.append(img);
      socialLinkContainer.append(link);
    });

    contact.append(addressLink);
    contact.append(socialLinkContainer);
    infoContainer.append(contact);
    infoContainer.append(workTime);

    const line = createElement({ tagName: 'div', className: 'footer-line' });
    const userNameContainer = createElement({ tagName: 'div', className: 'username-container' });
    userNameContainer.insertAdjacentHTML('beforeend', `
      <p>2023</p>
      <a href="https://rs.school/js-stage0/ ">
        <p>The Rolling Scopes School</p>
      </a>
      <a href="https://github.com/yauhenibelski">
        <p>
        ${
          App.user.firstName
            ? `${App.user.firstName} ${App.user.lastName}`
            : 'Yauheni Belski'
        }
        </p>
      </a>
    `);

    footerContainer.append(infoContainer);
    footerContainer.append(line);
    footerContainer.append(userNameContainer);

    this._container.append(footerContainer);
  }

  render() {
    this._container.innerHTML = '';
    this._createFooter();
    return this._container;
  }
}
export default Footer;
