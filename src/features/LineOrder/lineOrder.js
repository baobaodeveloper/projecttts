import { createSlice } from '@reduxjs/toolkit';
import { lineOrder } from '../../data';

const lineOrderSlice = createSlice({
  name: 'lineOrder',
  initialState: lineOrder,
  reducers: {
    updateLineOrder: (state, action) => {
      state = action.payload;
    },
  },
});

export const actionLineOrder = lineOrderSlice.actions;
const lineOrderReducer = lineOrderSlice.reducer;

export default lineOrderReducer;
