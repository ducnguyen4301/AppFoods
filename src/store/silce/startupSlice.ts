import {createAction, createSlice} from '@store/redux-utils';
import {PayloadAction} from '@store/type';

export const testAction = createAction('testCustomAction');

const startupSlice = createSlice({
  name: 'startup',
  initialState: {isLoading: false, random: 0},
  reducers: {
    increment(state) {
      state.isLoading = false;
    },
    decrement(state) {
      state.isLoading = true;
    },
    incrementByAmount(
      state,
      action: PayloadAction<{isLoading: boolean; random: number}>,
    ) {
      state.isLoading = action.payload.isLoading;
      state.random = action.payload.random;
    },
  },
  extraReducers: {
    [testAction.type]: (state, action: PayloadAction<{random: number}>) => {
      state.random = action.payload.random;
    },
  },
});

export const {increment, decrement, incrementByAmount} = startupSlice.actions;
export const getStartupState = startupSlice.getState;

export default startupSlice.reducer;
