import {combineReducers} from 'redux';

import auth from './authReducer';

const reducers = combineReducers({auth});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
