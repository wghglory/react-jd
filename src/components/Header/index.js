import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default function Header(props) {
  const { history, title = '', children } = props;
  const goBack = () => {
    history.goBack();
  };

  return (
    <header className='header'>
      {history ? (
        <i className='iconfont icon-jiantou-copy' onClick={goBack} />
      ) : (
        <Link to='/home'>
          <i className='iconfont icon-jiantou-copy' />
        </Link>
      )}
      {children}
      <div className='title'>{title}</div>
    </header>
  );
}
