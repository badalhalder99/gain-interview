import { ADD_PRODUCT } from './actionType';
import { initialState } from './initialState';

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...state, { id: Date.now() + Math.random(), ...action.payload }];
    }
    default:
      return state;
  }
};
export default productReducer;
