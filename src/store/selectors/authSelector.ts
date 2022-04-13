import {UserState} from '@store/types';

export const getUserState = (state: {auth: UserState}) => state.auth;
export const getIsAuth = (state: {auth: UserState}) => state.auth.isAuth;
export const getUserInfo = (state: {auth: UserState}) => state.auth.user;
export const getUserIsLoading = (state: {auth: UserState}) =>
  state.auth.isLoading;
