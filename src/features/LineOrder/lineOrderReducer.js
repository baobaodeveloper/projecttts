import { createSlice } from '@reduxjs/toolkit';

const lineOrderSlice = createSlice({
  name: 'lineOrder',
  initialState: {
    lineOrder: [],
  },
  reducers: {
    updateLineOrder: (state, action) => {
      state.lineOrder = [...state.lineOrder, action.payload];
    },
  },
});

export const actionLineOrder = lineOrderSlice.actions;
const lineOrderReducer = lineOrderSlice.reducer;

export default lineOrderReducer;
