import productReducer from './productList/productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: productReducer
})
export default rootReducer;