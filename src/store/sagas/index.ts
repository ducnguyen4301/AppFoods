import {all} from 'redux-saga/effects';
import startup from './startupSaga';

function* rootSaga() {
  yield all([...startup]);
}

export default rootSaga;
