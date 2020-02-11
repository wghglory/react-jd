const initialState = {
  firstCategories: [],
  secondCategories: [],
};
const categoryReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'firstCategories':
      return { ...state, firstCategories: action.state };
    case 'secondCategories':
      return { ...state, secondCategories: action.state };
    default:
      return state;
  }
};
export default categoryReducer;
