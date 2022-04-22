import React from 'react';
import {
  KeyboardAvoidingViewProps,
  ScrollViewProps,
  ViewStyle,
} from 'react-native';

export interface IFormContainer extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
  nativeId?: string;
  toolbar?: JSX.Element;
  ref?: any;
  customToolBar?: JSX.Element;
  toolBarStyleContainer?: ViewStyle;
  scrollViewProps?: ScrollViewProps;
}
