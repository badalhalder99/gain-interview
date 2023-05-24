import { ADD_PRODUCT } from './actionType';

export const addProduct = (productData) => {
  return {
    type: ADD_PRODUCT,
    payload: productData
  }
}