import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
  },
  reducers: {
    onLoading: (state) => {
      state.loading = true;
    },
    offLoading: (state) => {
      state.loading = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
