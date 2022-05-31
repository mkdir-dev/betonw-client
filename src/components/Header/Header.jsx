import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-wrap">
          <div className="header__logo" />
          <p>Beton-W</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
