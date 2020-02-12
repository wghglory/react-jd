import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getHomeCarousel } from '../../action/homeAction';

import DefaultLayout from '../Layout/DefaultLayout';

import Carousel from '../../components/Carousel';

import styles from './index.module.scss'; // must be xx.module.scss
import homeOther from './homeOther.png';

function Home(props) {
  const { data, getHomeCarousel } = props;

  const { counter, homeCarousel, mallNav } = data;

  console.log(styles);

  useEffect(() => {
    getHomeCarousel();
    return () => {};
  }, []);

  return (
    <DefaultLayout title='多快好省，购物上京东！' shortIcon='//m.jd.com/favicon.ico'>
      <div className={styles.home}>
        <section className={styles.part1}>
          <Carousel data={homeCarousel} />
        </section>
        <img src={homeOther} style={{ width: '100%' }} />
      </div>
    </DefaultLayout>
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
