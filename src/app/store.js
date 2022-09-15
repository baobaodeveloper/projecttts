import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleWare from 'redux-saga';
import loadingReducer from '../components/Loading/loadingReducer';
import lineOrderReducer from '../features/LineOrder/lineOrderReducer';
import myCartReducer from '../features/MyCart/myCartReducer';
import orderReducer from '../features/Order/orderReducer';
import productReducer from '../features/Product/productReducer';
import rootSaga from './watcher';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  orderReducer,
  productReducer,
  lineOrderReducer,
  myCartReducer,
  loadingReducer,
});

const sagaMiddleWare = createSagaMiddleWare();

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['myCartReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleWare),
});

export const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);
