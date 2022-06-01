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
            <a href="tel:+79533856934">
              тел. +7 (953) 38 56 934
            </a>
          </div>
        </div>
        <div className="footer__mail">
          <a href="mailto:beton-w@mail.ru">
            beton-w@mail.ru
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
