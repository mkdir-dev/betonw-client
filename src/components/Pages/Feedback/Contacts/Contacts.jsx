import React from 'react';

import './Contacts.scss';

function Contacts() {
  return (
    <section className="container-contacts">
      <article>
        <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
        <div className="container-contacts__subtitle">
          <p>«Beton-W»</p>
          <p>ИП Михайлов</p>
          <p>г. Екатеринбург, ул. Циолковского, 29, офис 4</p>
          <div className="container-contacts__subtitle-telAndEmail">
            <p>тел. +7 (953) 38 56 934 </p>
            <a href="tel:+79533856934">
              Позвонить
            </a>
          </div>
          <div className="container-contacts__subtitle-telAndEmail">
            <p>тел. +7 (952) 74 10 505</p>
            <a href="tel:+79527410505">
              Позвонить
            </a>
          </div>
          <div className="container-contacts__subtitle-telAndEmail">
            <p>beton-w@mail.ru</p>
            <a href="mailto:beton-w@mail.ru">
              Написать письмо
            </a>
          </div>

        </div>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.418358088471!2d60.60102691594269!3d56.80445208084771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16eda090e39d9%3A0x908cea482c840d9!2z0YPQuy4g0KbQuNC-0LvQutC-0LLRgdC60L7Qs9C-LCAyOSwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMTMx!5e0!3m2!1sru!2sru!4v1653987372303!5m2!1sru!2sru"
        title="maps"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default Contacts;
