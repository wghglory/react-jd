import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from './Home';
import Category from './Category';
import SearchWithInputPage from './SearchWithInputPage';
import User from './User';
import _404 from './404';
import Login from './Login';
import ProductList from './Product/ProductList';

function setTitle(title) {
  return (title) => {
    document.title = title;
  };
}

function RouteConfig(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home} onEnter={setTitle('多快好省，购物上京东！')}></Route>
      <Route exact path='/home' component={Home} onEnter={setTitle('多快好省，购物上京东！')}></Route>
      <PrivateRoute path='/user' component={User} onEnter={setTitle('用户中心 - 京东商城')} />
      <Route path='/productList' component={ProductList}></Route>
      <Route path='/category' component={Category} onEnter={setTitle('京东商品分类 - 京东商城')}></Route>
      <Route path='/searchWithInputPage' component={SearchWithInputPage} />
      <Route path='/login' component={Login} onEnter={setTitle('京东登录')}></Route>
      <Route component={_404} onEnter={setTitle('404')}></Route>
    </Switch>
  );
}

export default RouteConfig;
