import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import loadingReducer from '../components/Loading/loadingReducer';
import lineOrderReducer from '../features/LineOrder/lineOrderReducer';
import myCartReducer from '../features/MyCart/myCartReducer';
import orderReducer from '../features/Order/orderReducer';
import productReducer from '../features/Product/productReducer';
import rootSaga from './watcher';
const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    orderReducer,
    productReducer,
    lineOrderReducer,
    myCartReducer,
    loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);
