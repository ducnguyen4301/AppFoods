import * as actions from '@store/actions/startupAction';
import produce from 'immer';

const INITIAL_STATE = {
  isLoading: true,
};

const startupReducer = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.START_UP_SUCCESS:
      state.isLoading = false;
      return state;

    default:
      return state;
  }
});

export default startupReducer;
