import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabScreens} from './routes';
import {BottomTabRoutes, ScreenOptions} from './types';
import {CustomIcon, IconsMCI} from '@assets/icons';
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
          name="home"
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    MyOrders: {
      tabBarLabel: 'MyOrders',
      tabBarIcon: ({focused}) => (
        <IconsMCI
          name="cart"
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Likes: {
      tabBarLabel: 'Likes',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name="bell"
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Notifications: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name="bell"
          size={24}
          color={focused ? Colors.orange : Colors.black}
        />
      ),
    },
    Me: {
      tabBarLabel: 'Me',
      tabBarIcon: ({focused}) => (
        <CustomIcon
          name="user-o"
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
