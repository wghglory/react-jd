import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginItem from './LoginItem';
import { loginPost, getUserInfo } from '../../action/loginAction';

import './login.scss';
import DefaultLayout from '../Layout/DefaultLayout';

function Login(props) {
  const { location, data, loginPost, getUserInfo } = props;
  const { isAuthenticated } = data || {};

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, [getUserInfo]);

  const redirect = (location && location.state && location.state.redirect) || '/';

  if (isAuthenticated) {
    return <Redirect to={redirect} />;
  }

  return (
    <DefaultLayout title='京东登录' showTabBar={false} headerConfig={{ title: '京东登录' }}>
      <div className='login'>
        <LoginItem loginPost={loginPost} />
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
    loginPost,
    getUserInfo,
  },
)(Login);
