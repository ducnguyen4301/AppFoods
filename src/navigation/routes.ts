import {Auth, BottomTab} from '@screens';
import BottomTabNavigation from './BottomTab';

/**
 * Common screens
 */
export const commonScreens = {
  BottomTab: BottomTabNavigation,
};

/**
 * Screens when user logged in
 */
export const userScreens = {};

/**
 * Screens user when user not logged in
 */
export const notLoggedInScreens = {
  LoginScreen: Auth.LoginScreen,
  LoginPhone: Auth.LoginPhone,
  OTPScreen: Auth.OTPScreen,
  ForgotPass: Auth.ForgotPassScreen,
};
/**
 * Modal
 */
export const notLoggedInModalSlides = {};
export const userModalSlides = {};
export const commonModalSlides = {};

/**
 * Bottom Tab
 */
export const bottomTabScreens = [
  {component: BottomTab.Home, name: 'Home'},
  {component: BottomTab.MyOrder, name: 'MyOrders'},
  {component: BottomTab.Likes, name: 'Likes'},
  {component: BottomTab.Notify, name: 'Notifications'},
  {component: BottomTab.Me, name: 'Me'},
];
