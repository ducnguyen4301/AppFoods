import {
  ParamListBase,
  RouteConfig,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackRoutes = {
  BottomTab: NavigatorScreenParams<BottomTabRoutes>;
};
export type AuthStackRoutes = {
  Auth: NavigatorScreenParams<AuthRoutes>;
};
export type BottomTabRoutes = {
  Home: undefined;
  Orders: undefined;
  Likes: undefined;
  Notification: undefined;
  Me: undefined;
};
export type AuthRoutes = {
  LoginScreen: undefined;
  LoginPhone: undefined;
  OTPScreen: undefined;
  RegisterScreen: undefined;
  ForgotPassScreen: undefined;
};

export type RouteNames = keyof RootStackRoutes;

export type ScreenOptions<T extends ParamListBase, K extends {}> = {
  [screenName: string]: RouteConfig<T, keyof T, any, K, any>['options'];
};
