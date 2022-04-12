import {useTheme} from '@theme';
import React, {forwardRef, useEffect, useRef} from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import Block from '../Block';
import Text from '../Text';
import {isString} from '../utils';
import {InputOTPProps} from './types';

const MIN_HEIGHT_INPUT = 45;

const TextInputOTP = forwardRef<any, InputOTPProps>((props, ref) => {
  const inputRef = useRef<any>(null);
  const {Colors, Fonts} = useTheme();

  const {
    label,
    labelStyle,
    required,
    containerStyle,
    inputContainerStyle,
    style,
    fontType = 'regular',
    size = 14,
    disabled,
    disabledInputStyle,
    numberOfLines,
    maxLength,
    value = '',
    ...rest
  } = props;

  useEffect(() => {
    if (ref && typeof ref !== 'function') {
      (ref as any).current = inputRef.current;
    }
  }, [ref]);

  const _renderLabel = () => {
    if (isString(label)) {
      return (
        <Text margin={{bottom: 4}} color="primaryText" style={labelStyle}>
          {label}
          {required && <Text color="error"> *</Text>}
        </Text>
      );
    }
    return label;
  };

  const inputInitStyle = StyleSheet.flatten([
    Fonts[fontType],
    {
      color: Colors.primaryText,
      minHeight: MIN_HEIGHT_INPUT,
      fontSize: size,
    },
    disabled && {backgroundColor: Colors.disabled, color: Colors.placeholder},
    disabled && disabledInputStyle,
    !!numberOfLines && {
      height: size * 1.6 * numberOfLines,
    },
    style,
  ]);

  const _renderInput = () => {
    return (
      <TextInputMask
        autoCapitalize="none"
        allowFontScaling={false}
        underlineColorAndroid="transparent"
        style={inputInitStyle}
        autoCorrect={false}
        placeholderTextColor={Colors.placeholder}
        editable={!disabled}
        {...rest}
        value={value}
        maxLength={maxLength}
        ref={e => {
          inputRef.current = e;
          typeof ref === 'function' && ref(e);
        }}
      />
    );
  };

  return (
    <Block style={containerStyle}>
      {!!label && _renderLabel()}
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef.current?.focus();
        }}>
        <Block
          row
          align="center"
          //backgroundColor="red"
          style={inputContainerStyle}>
          {_renderInput()}
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
});

export default TextInputOTP;
