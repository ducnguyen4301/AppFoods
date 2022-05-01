import * as actions from '@store/actions/authAction';
import produce from 'immer';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

const userReducer = produce((state: any = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      state.isLoading = true;
      return state;

    default:
      return state;
  }
});

export default userReducer;
