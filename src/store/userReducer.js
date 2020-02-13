const initialState = {
  userInfo: {},
  isAuthenticated: false,
};

const loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'GET_USER_INFO':
      return { ...state, userInfo: action.state, isAuthenticated: action.state.id !== null ? true : false };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
export default loginReducer;
