import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss';

import { pages } from '../../utils/constants';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-wrap">
          <div className="header__logo" />
          <h2 className="header__name">Beton-W</h2>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-items">
            {pages.map((page) => (
              <li
                key={page.id}
                className="header__nav-item"
              >
                <NavLink
                  to={page.path}
                  className={`header__navlink
                    ${location.pathname === page.path
                    ? 'header__navlink_active' : ''}
                  `}
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
