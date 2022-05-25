import {Colors} from '@theme/color';
import {Alert, Linking} from 'react-native';
import {call} from '@redux-saga/core/effects';
import InAppBrowser, {
  InAppBrowserOptions,
} from 'react-native-inappbrowser-reborn';

type SafeConfigs = {
  hideAlert?: boolean;
  customError?: (err: any) => void;
  alert?: {
    title?: string;
    message?: string;
  };
};

const Helper = {
  generateUUID: (): string => {
    const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return template.replace(/[xy]/g, function (c) {
      let r = Math.trunc(Math.random() * 16),
        v = c === 'x' ? r : (r && 0x3) || 0x8;
      return v.toString(16);
    });
  },
  /**
   * Add opacity to color
   */
  colorOpacity: (color: string, opacity: number) => {
    const rgbArr = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgbArr) {
      const [r, g, b] = rgbArr;
      return `rgba(${r},${g},${b},${opacity})`;
    } else {
      const colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
      if (colors) {
        const [, r, g, b] = colors;
        return `rgba(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(
          b,
          16,
        )},${opacity})`;
      }
    }
    return color;
  },
  colorLuminance: (hex: string, lum: number, opacity?: number): string => {
    if (!hex.startsWith('#')) {
      return hex;
    }
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    let rgb = '#',
      c,
      i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ('00' + c).substr(c.length);
    }
    if (opacity) {
      const intValue = Math.round(opacity * 255);
      const hexValue = intValue.toString(16);
      return rgb + hexValue.padStart(2, '0');
    }
    return rgb;
  },
  openLink: async (url: string, options?: InAppBrowserOptions | undefined) => {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: Colors.white,
          preferredControlTintColor: 'black',
          modalEnabled: true,
          modalPresentationStyle: 'automatic',
          animated: true,
          enableBarCollapsing: false,

          // Android Properties
          showTitle: true,
          toolbarColor: Colors.primary,
          secondaryToolbarColor: Colors.primaryText,
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          ...options,
        });
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      InAppBrowser.close();
      Alert.alert('' + error);
    }
  },
  safe: (saga: any, configs?: SafeConfigs, ...args: any[]) => {
    return function* (action: any) {
      try {
        yield call(saga, ...args, action);
      } catch (err: any) {
        if (typeof configs?.customError === 'function') {
          yield call(configs.customError, err);
        }
        if (err.error === 'Unauthorized') {
          Alert.alert('dang nhap that bai');
        }
        if (!configs?.hideAlert) {
          if (err.message === 'Network Error') {
            Alert.alert('Lỗi kết nối mạng');
          } else {
            Alert.alert(configs?.alert?.message ?? err.message);
          }
        }
      }
    };
  },
};

export default Helper;
