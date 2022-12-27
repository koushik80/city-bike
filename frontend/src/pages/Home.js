import React, { Fragment } from 'react';
import Header from '../components/common/Header';
import Station from '../components/station/Station';


const Home = () => {
  return (
    <Fragment>
      <Header />
      <Station />
    </Fragment>
  );
};

export default Home;