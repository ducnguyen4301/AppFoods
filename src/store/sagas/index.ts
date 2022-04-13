import {all} from 'redux-saga/effects';
import startup from './startupSaga';
import authSaga from './auth/authSaga';
function* rootSaga() {
  yield all([...startup, authSaga]);
}

export default rootSaga;
