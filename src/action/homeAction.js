import { getHomeCarouselRequest, getMallRequest } from '../services/home';

export const getHomeCarousel = (payload) => (dispatch) => {
  getHomeCarouselRequest().then((res = {}) => {
    // console.log('dispatch home getHomeCarousel action');
    dispatch({
      type: 'GET_CAROUSEL',
      state: res.data,
    });
  });
};
export const getMall = (payload) => (dispatch) => {
  getMallRequest().then((res = {}) => {
    dispatch({
      type: 'GET_MALL',
      state: res.data,
    });
  });
};
