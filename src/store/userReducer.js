const initialState = {
  userInfo: {},
  isAuthenticated: false,
};

const loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'login':
    case 'userInfo':
      return { ...state, userInfo: action.state, isAuthenticated: action.state.id != null ? true : false };
    default:
      return state;
  }
};
export default loginReducer;
