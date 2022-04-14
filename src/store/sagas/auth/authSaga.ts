import {navigationRef} from 'navigation/NavigationServices';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import api from '@utils/api';
import Helper from '@utils/helpers';
import {Alert} from 'react-native';
import {
  authError,
  getCurrentUser,
  getCurrentUserSuccess,
  login,
  loginPhone,
  loginSuccess,
  logout,
  signUp,
  signUpSuccess,
} from './slice';
import {LoginRequest, LoginRequestPhone, SignUpRequest} from '../../types';

function* handleLogin(action: PayloadAction<LoginRequest>) {
  const {data} = yield call(api, '/auth/login', action.payload);
  yield put(loginSuccess(data));
}
function* handleLoginPhone(action: PayloadAction<LoginRequestPhone>) {
  const {data} = yield call(api, '/auth/login', action.payload);
  yield put(loginSuccess(data));
}
function* handleSignUp(action: PayloadAction<SignUpRequest>) {
  yield call(api, '/auth/register', action.payload);
  yield put(signUpSuccess());
  navigationRef.current?.goBack();
  Alert.alert(
    'Thành công',
    'Email xác thực đã được gửi, hãy nhấn vào link trong email kích hoạt tài khoản',
  );
}

function* handleGetCurrentUser() {
  const {data} = yield call(api, '/user/getCurrentUser');
  yield put(getCurrentUserSuccess(data));
}

const safeConfigs = (title: string, action: PayloadAction) => ({
  customError: function* () {
    yield put(action);
  },
  alert: {title},
});

export default [
  takeLatest(
    login.type,
    Helper.safe(handleLogin, safeConfigs('Đăng nhập thất bại', authError())),
  ),
  takeLatest(
    loginPhone.type,
    Helper.safe(
      handleLoginPhone,
      safeConfigs('Đăng nhập thất bại', authError()),
    ),
  ),
  takeLatest(
    signUp.type,
    Helper.safe(handleSignUp, safeConfigs('Đăng ký thất bại', authError())),
  ),
  takeLatest(
    getCurrentUser.type,
    Helper.safe(
      handleGetCurrentUser,
      safeConfigs('Phiên đăng nhập hết hạn', logout()),
    ),
  ),
];
