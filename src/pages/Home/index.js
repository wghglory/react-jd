import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getHomeCarousel } from '../../action/homeAction';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';

function Home(props) {
  const { data, getHomeCarousel } = props;

  const { counter, homeCarousel, mallNav } = data;

  useEffect(() => {
    getHomeCarousel();
    return () => {};
  }, []);

  return (
    <div>
      <Header></Header>
      <Carousel data={homeCarousel}></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default connect(
  (state) => {
    return { data: state.home };
  },
  {
    getHomeCarousel,
  },
)(Home);
