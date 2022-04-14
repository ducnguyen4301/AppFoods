import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabScreens} from './routes';
import {BottomTabRoutes, ScreenOptions} from './types';
import {CustomIcon} from '@assets/icons';
import {useTheme} from '@theme';
const Tab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigation = () => {
  const {Colors} = useTheme();
  const screenOptions: ScreenOptions<
    BottomTabRoutes,
    BottomTabNavigationOptions
  > = {
    Home: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'home' : 'home-n'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    MyOrders: {
      tabBarLabel: 'MyOrders',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'receipt' : 'receipt-o'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Likes: {
      tabBarLabel: 'Likes',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'heart' : 'heart-o'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Notifications: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'bell' : 'bell-o'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Me: {
      tabBarLabel: 'Me',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'user' : 'user-o'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Login: {
      tabBarLabel: 'Login',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'user' : 'user-o'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    LoginPhone: {
      tabBarLabel: 'LoginPhone',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name={focused ? 'user' : 'user-o'}
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.black,
      }}>
      {bottomTabScreens.map(({name, component}: any) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={screenOptions[name]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
