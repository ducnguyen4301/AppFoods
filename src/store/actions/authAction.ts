import {LoginRequest} from '@store/types';

export const LOGIN_REQUEST = '@Auth/loginRequest';

export const loginAccountRequest = (payload: LoginRequest) => ({
  type: LOGIN_REQUEST,
  payload,
});
export const LOGIN_ACCOUNT_SUCCESS = '@Auth/loginSuccess';
export const loginAccountSuccess = (payload: any) => ({
  type: LOGIN_ACCOUNT_SUCCESS,
  payload,
});
export const LOGOUT_ACCOUNT = '@Auth/logoutRequest';
export const logoutAccount = () => ({type: LOGOUT_ACCOUNT});

export const LOGOUT_ACCOUNT_SUCCESS = '@Auth/logoutSuccess';
export const logoutAccountSuccess = () => ({type: LOGOUT_ACCOUNT_SUCCESS});
