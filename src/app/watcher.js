import { all } from 'redux-saga/effects';
import { followUpdateLineOrder } from '../features/LineOrder/lineOrderWatcher';
import {
  followAddProductInCart,
  followRemoveProductInCart,
} from '../features/MyCart/myCartWatcher';
import { followUpdateOrder } from '../features/Order/orderWatcher';
import { followCreateProduct } from '../features/Product/productWatcher';

export default function* rootSaga() {
  yield all([
    followCreateProduct(),
    followAddProductInCart(),
    followUpdateOrder(),
    followRemoveProductInCart(),
    followUpdateLineOrder(),
  ]);
}
