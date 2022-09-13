import { all } from 'redux-saga/effects';
import { followAddProductInCart } from '../features/MyCart/myCartWatcher';
import { followCreateProduct } from '../features/Product/productWatcher';

export default function* rootSaga() {
  yield all([followCreateProduct(), followAddProductInCart()]);
}
