import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getHomeCarousel, getMall } from '../../action/homeAction';

import DefaultLayout from '../Layout/DefaultLayout';

import Carousel from '../../components/Carousel';

import styles from './index.module.scss'; // must be xx.module.scss
import homeOther from './homeOther.png';

import SearchInput from './SearchInput';
import Mall from './Mall';

function Home(props) {
  const { data, getHomeCarousel, getMall, user, history } = props;

  const { homeCarousel, mall = [] } = data;

  const [showSearchPage, setShowSearchPage] = useState(false);

  useEffect(() => {
    getHomeCarousel();
    getMall();
    return () => {};
  }, [getHomeCarousel, getMall]);

  return (
    <DefaultLayout title='多快好省，购物上京东！' shortIcon='//m.jd.com/favicon.ico'>
      <div className={styles.home}>
        <SearchInput
          user={user}
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
          history={history}
        />

        <section className={styles.part1}>
          <Carousel data={homeCarousel} />
        </section>

        <section className={styles.part2}>
          <Mall data={mall} />
        </section>

        <img src={homeOther} style={{ width: '100%' }} alt='...here' />
      </div>
    </DefaultLayout>
  );
}

export default connect(
  (state) => {
    return { data: state.home, user: state.user };
  },
  {
    getHomeCarousel,
    getMall,
  },
)(Home);
