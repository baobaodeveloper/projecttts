import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/common';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: getLocalStorage('orderList') || [],
  },
  reducers: {
    updateOrder: (state, action) => {
      state.order = [action.payload, ...state.order];
      setLocalStorage('orderList', state.order);
    },
  },
});

export const actionOrder = orderSlice.actions;
const orderReducer = orderSlice.reducer;

export default orderReducer;
