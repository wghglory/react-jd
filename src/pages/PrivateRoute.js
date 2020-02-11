import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//import { getUserInfo } from '../action/loginAction'

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }
  /* componentDidMount() {
    this.props.getUserInfo()
  } */
  render() {
    const { props } = this;
    const { component: Component, user, ...rest } = props;
    const { isAuthenticated } = user;

    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { redirect: props.location.pathname },
              }}
            />
          )
        }
      ></Route>
    );
  }
}
export default connect(
  (state) => {
    return {
      user: state.user,
    };
  },
  {
    //getUserInfo
  },
)(PrivateRoute);
