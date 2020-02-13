const initialState = {
  products: [],
};

const productReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.state };
    default:
      return state;
  }
};
export default productReducer;
