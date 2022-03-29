import {TextStyle} from 'react-native';

export interface ThemeFontWeight {
  regular: FontBase;
  bold: FontBase;
  demiBold: FontBase;
}

export type FontBase = {
  fontFamily: string;
  fontWeight: TextStyle['fontWeight'];
};

export type ThemeColors = {[key: string]: string};
