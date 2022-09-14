import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/common';

const myCartSlice = createSlice({
  name: 'myCart',
  initialState: {
    myCart: getLocalStorage('myCartList') || [],
  },
  reducers: {
    updateMyCart: (state, action) => {
      const indexExist = state.myCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexExist !== -1) {
        state.myCart[indexExist].soLuong += action.payload.soLuong;
        setLocalStorage('myCartList', state.myCart);
      } else {
        state.myCart = [action.payload, ...state.myCart];
        setLocalStorage('myCartList', state.myCart);
      }
    },
    moveProductFromMyCart: (state, action) => {
      state.myCart = [];
      setLocalStorage('myCartList', state.myCart);
    },
  },
});

export const actionMyCart = myCartSlice.actions;
const myCartReducer = myCartSlice.reducer;

export default myCartReducer;
