import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {getIsAuth} from '@store/selectors';
import {useTheme} from '@theme';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  commonModalSlides,
  commonScreens,
  notLoggedInModalSlides,
  notLoggedInScreens,
  userModalSlides,
  userScreens,
} from './routes';
import {RootStackRoutes, ScreenOptions} from './types';

const RootStack = createStackNavigator<RootStackRoutes>();

const RootStackNavigation = () => {
  const {Fonts, Colors} = useTheme();
  const isAuth = useSelector(getIsAuth);
  console.log(isAuth);

  const screenOptions: ScreenOptions<RootStackRoutes, StackNavigationOptions> =
    {BottomTab: {headerShown: false}};

  const defaultOptions = ({}: any) => ({
    title: '',
    headerShown: false,
    headerTitleAllowFontScaling: false,
    headerTitleStyle: {
      ...Fonts.bold,
      color: Colors.dark,
      fontSize: 16,
    },
    headerStyle: {shadowOpacity: 0, elevation: 0},
  });

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={defaultOptions}>
        {Object.entries({
          ...commonScreens,
          ...(isAuth ? userScreens : notLoggedInScreens),
        }).map(([name, component]: any) => (
          <RootStack.Screen
            key={name}
            name={name}
            component={component}
            options={screenOptions[name]}
          />
        ))}
      </RootStack.Group>
      <RootStack.Group
        screenOptions={({navigation}) => ({
          ...defaultOptions({navigation, mode: 'popup'}),
          headerShown: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        })}>
        {Object.entries({
          ...commonModalSlides,
          ...(isAuth ? userModalSlides : notLoggedInModalSlides),
        }).map(([name, component]: any) => (
          <RootStack.Screen
            key={name}
            name={name}
            component={component}
            options={screenOptions[name]}
          />
        ))}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
