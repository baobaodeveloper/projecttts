import { put, takeLeading } from 'redux-saga/effects';
import actions from '../../actionTypes';
import { actionOrder } from './orderReducer';

function* updateOrder({ data = {} }) {
  try {
    yield put(actionOrder.updateOrder(data));
  } catch (error) {
    console.log(error);
  }
}

export function* followUpdateOrder() {
  yield takeLeading(actions.UPDATE_ORDER, updateOrder);
}
