import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import Price from '../Pages/Price/Price';
import Feedback from '../Pages/Feedback/Feedback';
import Footer from '../Footer/Footer';

function RoutesMenu() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />

          <Route
            exact
            path="/price"
            element={<Price />}
          />

          <Route
            exact
            path="/contacts"
            element={<Feedback />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default RoutesMenu;
