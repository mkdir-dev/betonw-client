/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
                    ${location.pathname === page.path ? 'header__navlink_active' : ''}
                  `}
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
            <li
              className="header__nav-item"
            >
              <button
                type="button"
                className="header__btn"
              >
                <a
                  href="tel:+79533856934"
                >
                  Заказать
                </a>
              </button>
            </li>
          </ul>
        </nav>

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span />
          </label>
          <ul className="menu__box">
            {pages.map((page) => (
              <li
                key={page.id}
              >
                <NavLink
                  to={page.path}
                  className="menu__item"
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
