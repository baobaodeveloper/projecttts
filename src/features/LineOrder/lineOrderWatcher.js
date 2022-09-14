import { put, takeLeading } from 'redux-saga/effects';
import actions from '../../actionTypes';
import { actionLineOrder } from './lineOrderReducer';

function* updateLineOrder({ data = {} }) {
  try {
    yield put(actionLineOrder.updateLineOrder(data));
  } catch (error) {
    console.log(error);
  }
}

export function* followUpdateLineOrder() {
  yield takeLeading(actions.UPDATE_LINEORDER, updateLineOrder);
}
