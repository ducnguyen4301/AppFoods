import {
  ParamListBase,
  RouteConfig,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackRoutes = {
  BottomTab: NavigatorScreenParams<BottomTabRoutes>;
};

export type BottomTabRoutes = {
  HomeScreen: undefined;
  Settings: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type RouteNames = keyof RootStackRoutes;

export type DevStackRoutes = {
  DevMenu: undefined;
};

export type ScreenOptions<T extends ParamListBase, K extends {}> = {
  [screenName: string]: RouteConfig<T, keyof T, any, K, any>['options'];
};
