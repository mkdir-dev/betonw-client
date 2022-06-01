import React from 'react';

import './Footer.scss';

import telegram from '../../assets/images/icon-telegram.png';
import whatsapp from '../../assets/images/icon-whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-wrap">
          <div className="footer__logo" />
          <h2 className="footer__name">Beton-W</h2>
        </div>
        <div className="footer__address">
          <p>ИП Михайлов</p>
          <p>г. Екатеринбург, ул. Циолковского, 29, офис 4</p>
        </div>
        <div className="footer__contacts">
          <div className="footer__tel">
            <a href="tel:+79533856934">
              тел. +7 (953) 38 56 934
            </a>
          </div>
          <div className="footer__mail">
            <a href="mailto:beton-w@mail.ru">
              beton-w@mail.ru
            </a>
          </div>
        </div>
        <div className="footer__messengers">
          <a href="https://wa.me/+79533856934">
            <img
              src={telegram}
              alt="telegram"
              className="container-contacts__subtitle-telegram"
            />
          </a>
          <a href="https://wa.me/+79533856934">
            <img
              src={whatsapp}
              alt="whatsapp"
              className="container-contacts__subtitle-whatsapp"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
