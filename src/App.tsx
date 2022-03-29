import React from 'react';
import MainNavigation from 'navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => (
  <SafeAreaProvider>
    <MainNavigation />
  </SafeAreaProvider>
);
export default App;
