import { put, takeLeading } from 'redux-saga/effects';
import actions from '../../actionTypes';
import { actionProduct } from './productReducer';

function* createProduct({ data = {} }) {
  try {
    yield put(actionProduct.updateProduct(data));
  } catch (error) {
    console.log(error);
  }
}

export function* followCreateProduct() {
  yield takeLeading(actions.UPDATE_LIST_PRODUCT, createProduct);
}
