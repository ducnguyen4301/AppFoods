import * as actions from '@store/actions/authAction';
import {UserState} from '@store/types/authType';
import produce from 'immer';

const INITIAL_STATE = {
  isLoading: false,
  isAuth: false,
  user: null,
};

const userReducer = produce((state: UserState = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      state.isLoading = true;
      return state;

    case actions.LOGIN_ACCOUNT_SUCCESS:
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
      return state;

    case actions.LOGOUT_ACCOUNT:
      return INITIAL_STATE;

    default:
      return state;
  }
});

export default userReducer;
