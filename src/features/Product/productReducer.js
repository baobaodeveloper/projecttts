import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/common';

const productSlice = createSlice({
  name: 'Product',
  initialState: {
    productList: getLocalStorage('productList') || [],
  },
  reducers: {
    updateProduct: (state, action) => {
      state.productList = [action.payload, ...state.productList];
      setLocalStorage('productList', state.productList);
    },
  },
});

export const actionProduct = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
