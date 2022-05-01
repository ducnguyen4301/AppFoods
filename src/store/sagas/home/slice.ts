import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banner: {
      isLoading: true,
      data: [],
    },
  },
  reducers: {
    loadHomeData() {},
    loadBannerSuccess(state, action: PayloadAction<any>) {
      state.banner.isLoading = false;
      state.banner.data = action.payload.data;
    },
  },
});

export const {loadHomeData, loadBannerSuccess} = homeSlice.actions;

export default homeSlice.reducer;
