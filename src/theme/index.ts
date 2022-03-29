// import {DefaultTheme} from '@react-navigation/native';
// import {Platform} from 'react-native';
// import {ITheme} from './types';

// const theme: ITheme = {
//   ...DefaultTheme,
//   color: {
//     ...DefaultTheme.colors,
//     black: '#262626',
//     hover: '#f00e2a',
//     white: '#ffffff',
//     orange: '#FF6633',
//     border: 'rgba(112, 112, 112, 0.12)',
//     background: '#f0f2f5',
//     text: '#262626',
//     red: '#dd2222',
//     secondaryText: '#6f767c',
//     placeholder: '#656565',
//     primary: '#0f6ebf',
//     primary10: 'rgba(15, 110, 191, 0.1)',
//     success: '#0ead30',
//     white70: 'rgba(255, 255, 255, 0.7)',
//     black60: 'rgba(0, 0, 0, 0.6)',
//   },
//   fonts: {
//     fontWeight: {
//       bold: 'bold',
//       light: '300',
//       medium: '500',
//       semibold: Platform.OS === 'android' ? 'bold' : '600',
//       regular: 'normal',
//       normal: 'normal',
//       '100': '100',
//       '200': '200',
//       '300': '300',
//       '400': '400',
//       '500': '500',
//       '600': Platform.OS === 'android' ? 'bold' : '600',
//       '700': '700',
//       '800': '800',
//       '900': '900',
//     },
//     fontFamily: {
//       default: Platform.OS === 'ios' ? 'System' : 'Roboto',
//     },
//   },
// };

// export default theme;

import {DefaultTheme} from '@react-navigation/native';
import {Colors} from './color';
import {Fonts} from './fonts';

export const useTheme = () => {
  return {
    Colors,
    Fonts,
    NavigationTheme: {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        ...Colors,
      },
    },
  };
};
