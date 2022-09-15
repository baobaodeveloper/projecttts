import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: [],
  },
  reducers: {
    updateOrder: (state, action) => {
      state.order = [action.payload, ...state.order];
    },
  },
});

export const actionOrder = orderSlice.actions;
const orderReducer = orderSlice.reducer;

export default orderReducer;
