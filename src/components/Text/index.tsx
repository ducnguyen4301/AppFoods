import {useTheme} from '@theme';
import React from 'react';
import {StyleSheet, Text as ReactNativeText} from 'react-native';
import {createDefaultStyle, handleGutter, isNumber} from '../utils';
import {CommonTextProps} from './types';

const Text = (props: CommonTextProps) => {
  const {Fonts, Colors} = useTheme();

  const {
    style,
    fontType = 'regular',
    color = 'primaryText',
    size,
    lineHeight,
    backgroundColor,
    padding,
    margin,
    center,
    justify,
    right,
  } = props;

  const textStyle = StyleSheet.flatten([
    createDefaultStyle(props),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor] || backgroundColor,
    },
    Fonts[fontType],
    {color: Colors[color] || color},
    size && {fontSize: size},
    isNumber(lineHeight) && {lineHeight},
    center && {textAlign: 'center'},
    right && {textAlign: 'right'},
    justify && {textAlign: 'justify'},
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    style,
  ]);

  if (props?.children === undefined || props?.children === null) {
    return null;
  }

  return (
    <ReactNativeText allowFontScaling={false} {...props} style={textStyle}>
      {props.children}
    </ReactNativeText>
  );
};

export default Text;
