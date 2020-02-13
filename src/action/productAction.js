import { getProductsRequest } from '../services/product';

export const getProducts = (payload) => (dispatch) => {
  getProductsRequest().then((res = {}) => {
    dispatch({
      type: 'GET_PRODUCTS',
      state: res.data,
    });
  });
};
