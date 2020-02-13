import { logoutRequest } from '../services/user';

export const logout = (payload) => (dispatch) => {
  logoutRequest().then((res = {}) => {
    dispatch({
      type: 'LOGOUT',
      state: res.data,
    });
  });
};
