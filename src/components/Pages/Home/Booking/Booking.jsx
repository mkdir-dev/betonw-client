import React from 'react';

import './Booking.scss';

import MainBtn from '../../../../ui/buttons/MainBtn/MainBtn';

function Booking() {
  return (
    <section className="booking">
      <MainBtn
        href="tel:+79533856934"
        text="Сделать заказ"
      />
    </section>
  );
}

export default Booking;
