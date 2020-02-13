const initialState = {
  homeCarousel: [],
  mall: [],
};
const homeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'GET_CAROUSEL':
      return { ...state, homeCarousel: action.state };
    case 'GET_MALL':
      return { ...state, mall: action.state };
    default:
      return state;
  }
};
export default homeReducer;
