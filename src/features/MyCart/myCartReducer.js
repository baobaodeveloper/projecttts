import { createSlice } from '@reduxjs/toolkit';

const myCartSlice = createSlice({
  name: 'myCart',
  initialState: {
    myCart: [],
  },
  reducers: {
    updateMyCart: (state, action) => {
      const indexExist = state.myCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexExist !== -1) {
        state.myCart[indexExist].soLuong += action.payload.soLuong;
      } else {
        state.myCart = [action.payload, ...state.myCart];
      }
    },
    moveProductFromMyCart: (state, action) => {
      state.myCart = [];
    },
  },
});

export const actionMyCart = myCartSlice.actions;
const myCartReducer = myCartSlice.reducer;

export default myCartReducer;
