import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTab';
import {navigationRef} from './NavigationServices';
import RootStackNavigation from './RootStackNavigation';

const MainNavigation = () => {
  const {NavigationTheme} = useTheme();

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <StatusBar barStyle="dark-content" />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
