import React from 'react';
import MainNavigation from 'navigation';
import {Provider} from 'react-redux';
import {persistor, store} from '@store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainNavigation />
    </PersistGate>
  </Provider>
);
export default App;
