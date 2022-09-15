import { createSlice } from '@reduxjs/toolkit';
import { product } from '../../data';

const productSlice = createSlice({
  name: 'Product',
  initialState: {
    productList: product || [],
  },
  reducers: {
    updateProduct: (state, action) => {
      state.productList = [action.payload, ...state.productList];
    },
  },
});

export const actionProduct = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
