import React from 'react';

import Intro from './Intro/Intro';
import Advantages from './Advantages/Advantages';
import Demonstration from './Demonstration/Demonstration';
import Booking from './Booking/Booking';

function Home() {
  return (
    <section>
      <Intro />
      <Advantages />
      <Demonstration />
      <Booking />
    </section>
  );
}

export default Home;
