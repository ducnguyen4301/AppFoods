import {combineReducers} from 'redux';

import auth from './authReducer';
import home from '../sagas/home/slice';
const reducers = combineReducers({auth, home});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
