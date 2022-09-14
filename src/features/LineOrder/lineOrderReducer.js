import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/common';

const lineOrderSlice = createSlice({
  name: 'lineOrder',
  initialState: {
    lineOrder: getLocalStorage('lineOrderList') || [],
  },
  reducers: {
    updateLineOrder: (state, action) => {
      state.lineOrder = [...state.lineOrder, action.payload];
      setLocalStorage('lineOrderList', state.lineOrder);
    },
  },
});

export const actionLineOrder = lineOrderSlice.actions;
const lineOrderReducer = lineOrderSlice.reducer;

export default lineOrderReducer;
