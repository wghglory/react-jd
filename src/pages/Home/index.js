import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getHomeCarousel } from '../../action/homeAction';

function Home(props) {
  const { home, getHomeCarousel } = props;

  useEffect(() => {
    getHomeCarousel();
    return () => {};
  }, []);

  console.log(home);

  return <div>Home</div>;
}

export default connect(
  (state) => {
    return { home: state.home };
  },
  {
    getHomeCarousel,
  },
)(Home);
