import { put, takeLeading } from 'redux-saga/effects';
import actions from '../../actionTypes';
import { actionMyCart } from './myCartReducer';

function* addProductInCart({ data = {} }) {
  try {
    yield put(actionMyCart.updateMyCart(data));
  } catch (error) {
    console.log(error);
  }
}

export function* followAddProductInCart() {
  yield takeLeading(actions.UPDATE_MYCARD, addProductInCart);
}
