import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  AuthResponse,
  LoginRequest,
  LoginRequestPhone,
  SignUpRequest,
} from '../../types';

const initialState: any = {
  isAuth: false,
  userInfo: {},
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //Login account
    login: {
      prepare: (payload: LoginRequest) => ({payload}),
      reducer: state => {
        state.isLoading = true;
      },
    },
    loginPhone: {
      prepare: (payload: LoginRequestPhone) => ({payload}),
      reducer: state => {
        state.isLoading = true;
      },
    },
    loginSuccess: (state, action: PayloadAction<AuthResponse>) => {
      state.isAuth = true;
      state.userInfo = action.payload;
      state.isLoading = false;
    },
    //Sign up account
    signUp: {
      prepare: (payload: SignUpRequest) => ({payload}),
      reducer: state => {
        state.isLoading = true;
      },
    },
    signUpSuccess: state => {
      state.isLoading = false;
    },
    //Get Current User
    getCurrentUser() {},
    getCurrentUserSuccess: (state, action: PayloadAction<AuthResponse>) => {
      state.userInfo = action.payload;
    },
    //Log out account
    logout: () => initialState,
    //Auth error
    authError: state => {
      state.isLoading = false;
    },
  },
});

export const UPDATE_USER_INFO = 'auth/updateUserInfo';
export const updateUserInfo = (
  payload: {key: string; value: any},
  callback?: () => void,
) => ({type: UPDATE_USER_INFO, payload, callback});

export const {
  login,
  loginPhone,
  loginSuccess,
  signUp,
  signUpSuccess,
  getCurrentUser,
  getCurrentUserSuccess,
  logout,
  authError,
} = authSlice.actions;

export default authSlice.reducer;
