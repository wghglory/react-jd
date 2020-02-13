import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFirstCategories, getSecondCategories } from '../../action/categoryAction';

import DefaultLayout from '../Layout/DefaultLayout';

import './index.scss';

import FirstCategories from './FirstCategory';
import SecondCategories from './SecondCategory';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  componentDidMount() {
    this.props.getFirstCategories();
    this.props.getSecondCategories();
  }
  changeFirst = (newActiveIndex) => {
    this.setState(
      {
        activeIndex: newActiveIndex,
      },
      () => {
        this.props.getSecondCategories();
      },
    );
  };
  render() {
    const { firstCategories, secondCategories } = this.props.data;
    const { activeIndex } = this.state;
    return (
      <DefaultLayout
        title='京东商品分类 - 京东商城'
        topBarConfig={{ title: '商品分类' }}
        shortIcon='https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp'
      >
        <div className='category'>
          <FirstCategories data={firstCategories} activeIndex={activeIndex} changeFirst={this.changeFirst} />
          <SecondCategories data={secondCategories} />
        </div>
      </DefaultLayout>
    );
  }
}
export default connect(
  (state) => {
    return {
      data: state.category,
    };
  },
  {
    getFirstCategories,
    getSecondCategories,
  },
)(Category);
