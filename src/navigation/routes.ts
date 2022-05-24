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
export const userScreens = {
  Home: BottomTab.Home,
  MyOrder: BottomTab.MyOrder,
  Likes: BottomTab.Likes,
  Notify: BottomTab.Notify,
  Me: BottomTab.Me,
  About: BottomTab.AboutScreen,
  Voucher: BottomTab.VoucherScreen,
  Location: BottomTab.LocationScreen,
};

/**
 * Screens user when user not logged in
 */
export const notLoggedInScreens = {
  LoginScreen: Auth.LoginScreen,
  LoginPhone: Auth.LoginPhone,
  OTPScreen: Auth.OTPScreen,
  ForgotPass: Auth.ForgotPassScreen,
  AboutScreen: BottomTab.AboutScreen,
  Voucher: BottomTab.VoucherScreen,
  Location: BottomTab.LocationScreen,
  AddNewLocation: BottomTab.AddNewLocationScreen,
  UpdateLocation: BottomTab.UpdateLocationScreen,
  Profile: BottomTab.ProfileScreen,
  UpdateImage: BottomTab.UpdateImageScreen,
  UpdateUserName: BottomTab.UpdateUserNameScreen,
  UpdatePhone: BottomTab.UpdatePhoneScreen,
  UpdateEmail: BottomTab.UpdateEmailScreen,
  UpdateJob: BottomTab.UpdateJobScreen,
  Invite: BottomTab.InviteScreen,
  Settings: BottomTab.SettingScreen,
  Password: BottomTab.PasswordScreen,
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
