import { getFirstCategoriesRequest, getSecondCategoriesRequest } from '../services/category';

export const getFirstCategories = (payload) => (dispatch) => {
  getFirstCategoriesRequest().then((res = {}) => {
    dispatch({
      type: 'firstCategories',
      state: res.data,
    });
  });
};

export const getSecondCategories = (payload) => (dispatch) => {
  getSecondCategoriesRequest().then((res = {}) => {
    dispatch({
      type: 'secondCategories',
      //state: res.data
      state: res.data && (Math.random() > 0.5 ? res.data : res.data.reverse()),
    });
  });
};
