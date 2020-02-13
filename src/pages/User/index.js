import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../action/userAction';

import DefaultLayout from '../Layout/DefaultLayout';

import UserCard from './UserCard';

import './user.scss';

function User(props) {
  const { data, logout } = props;
  const { userInfo } = data;

  return (
    <DefaultLayout title='用户中心 - 京东商城' topBarConfig={{ title: '我的京东' }}>
      <div className='user'>
        <UserCard data={userInfo} />
        <div className='more'>很多信息。。。</div>
        <button className='btn' onClick={logout}>
          退出登录
        </button>
      </div>
    </DefaultLayout>
  );
}

export default connect(
  (state) => {
    return {
      data: state.user,
    };
  },
  {
    logout,
  },
)(User);
