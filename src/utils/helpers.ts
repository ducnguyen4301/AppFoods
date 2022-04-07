import {Colors} from '@theme/color';
import {Alert, Linking} from 'react-native';
import InAppBrowser, {
  InAppBrowserOptions,
} from 'react-native-inappbrowser-reborn';

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
  openLink: async (url: string, options?: InAppBrowserOptions | undefined) => {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: Colors.tealBlue,
          preferredControlTintColor: 'white',
          modalEnabled: true,
          modalPresentationStyle: 'automatic',
          animated: true,
          enableBarCollapsing: false,

          // Android Properties
          showTitle: true,
          toolbarColor: Colors.primary,
          secondaryToolbarColor: Colors.tealBlue,
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
};

export default Helper;
