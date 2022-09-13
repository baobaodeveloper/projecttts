import { createSlice } from '@reduxjs/toolkit';
import { myCart } from '../../data';

const myCartSlice = createSlice({
  name: 'myCart',
  initialState: {
    myCart: myCart || [],
  },
  reducers: {
    updateMyCart: (state, action) => {
      let IndexProductExist = state.myCart.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (IndexProductExist !== -1) {
        state.myCart[IndexProductExist].soLuong +=
          action.payload.soLuong;
      } else {
        state.myCart = [action.payload, ...state.myCart];
      }
    },
  },
});

export const actionMyCart = myCartSlice.actions;
const myCartReducer = myCartSlice.reducer;

export default myCartReducer;
