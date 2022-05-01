import {all} from 'redux-saga/effects';
import startup from './startupSaga';
import authSaga from './auth/authSaga';
import homeSaga from './home/homeSaga';
function* rootSaga() {
  yield all([...startup, ...authSaga, ...homeSaga]);
}

export default rootSaga;
