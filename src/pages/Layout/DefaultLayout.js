import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const menu = [
  {
    title: '首页',
    icon: 'shouye',
    link: '/',
  },
  {
    title: '分类',
    icon: 'fenlei',
    link: '/category',
  },
  {
    title: '我的',
    icon: 'wode',
    link: '/user',
  },
];
export default class DefaultLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { title = '京东商城', shortIcon = '//www.jd.com/favicon.ico' } = this.props;
    document.title = title;
    document.querySelector('link[rel="shortcut icon"]').href = shortIcon;
  }
  render() {
    const { style, children, showFooter = true, headerConfig } = this.props;
    return (
      <div className='default'>
        {headerConfig && <Header {...headerConfig} />}
        <div className='content' style={{ paddingBottom: '54px', ...style }}>
          {children}
        </div>
        {showFooter && <Footer menu={menu} />}
      </div>
    );
  }
}
