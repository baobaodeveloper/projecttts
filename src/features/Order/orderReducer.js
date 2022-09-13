import { createSlice } from '@reduxjs/toolkit';
import { order } from '../../data';

const orderSlice = createSlice({
  name: 'order',
  initialState: order,
  reducers: {
    updateOrder: (state, action) => {
      state = [...order, action.payload];
    },
  },
});

export const actionOrder = orderSlice.actions;
const orderReducer = orderSlice.reducer;

export default orderReducer;
