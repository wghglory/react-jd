import { loginRequest, getUserInfoRequest } from '../services/login';

export const loginPost = (payload) => (dispatch) => {
  loginRequest().then((res = {}) => {
    dispatch({
      type: 'LOGIN',
      state: res.data || { id: null },
    });
  });
};

export const getUserInfo = (payload) => (dispatch) => {
  getUserInfoRequest().then((res = {}) => {
    dispatch({
      type: 'GET_USER_INFO',
      state: res.data || { id: null },
    });
  });
};
