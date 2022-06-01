import React from 'react';

import './Footer.scss';

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
        <div className="footer__tel">
          <div className="footer__tel-first">
            <p>тел. +7 (953) 38 56 934 </p>
            <a href="tel:+79533856934">
              Позвонить
            </a>
          </div>
          <div className="footer__tel-second">
            <p>тел. +7 (952) 74 10 505</p>
            <a href="tel:+79527410505">
              Позвонить
            </a>
          </div>
        </div>
        <div className="footer__mail">
          <p>beton-w@mail.ru</p>
          <a href="mailto:beton-w@mail.ru">
            Написать письмо
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
