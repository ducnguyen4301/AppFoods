import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from './sagas';
import rootReducers from './silce';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'HelloWorld_Persist',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const middlewares = [];
middlewares.push(sagaMiddleware);
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store as any);

export {store, persistor};
