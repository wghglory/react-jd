import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './homeReducer';
import userReducer from './userReducer';
import productListReducer from './productListReducer';
import categoryReducer from './categoryReducer';

const store = createStore(
  combineReducers({
    home: homeReducer,
    user: userReducer,
    productList: productListReducer,
    category: categoryReducer,
  }),
  applyMiddleware(thunk),
);
export default store;
