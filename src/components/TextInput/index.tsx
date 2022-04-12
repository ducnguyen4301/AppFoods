import {useTheme} from '@theme';
import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import Block from '../Block';
import IconComponent from '../Icon';
import Text from '../Text';
import {isIcon, isString} from '../utils';
import {InputProps} from './types';

const MIN_HEIGHT_INPUT = 45;

const TextInput = forwardRef<any, InputProps>((props, ref) => {
  const inputRef = useRef<any>(null);
  const {Colors, Fonts} = useTheme();

  const {
    label,
    labelStyle,
    required,
    containerStyle,
    error,
    errorStyle,
    showError,
    inputContainerStyle,
    style,
    fontType = 'regular',
    size = 14,
    disabled,
    disabledInputStyle,
    leftIcon,
    leftIconContainerStyle,
    onLeftIconPress,
    rightIcon,
    rightIconContainerStyle,
    onRightIconPress,
    secureTextEntry,
    onFocus,
    onBlur,
    hideFocus,
    numberOfLines,
    maxLength,
    value = '',
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

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

  const _renderError = () => {
    if (isString(error)) {
      return (
        <Text color="error" style={errorStyle}>
          {error}
        </Text>
      );
    }
    return error;
  };

  const inputInitStyle = StyleSheet.flatten([
    Fonts[fontType],
    {
      color: Colors.primaryText,
      minHeight: MIN_HEIGHT_INPUT,
      flex: 1,
      fontSize: size,
      borderRadius: 8,
      paddingLeft: leftIcon ? 0 : 16,
      paddingRight: rightIcon || props.secureTextEntry ? 0 : 16,
    },
    disabled && {backgroundColor: Colors.disabled, color: Colors.placeholder},
    disabled && disabledInputStyle,
    !!numberOfLines && {
      height: size * 1.6 * numberOfLines,
    },
    style,
  ]);

  const [secureEye, setSecureEye] = useState(true);

  const _renderIcon = (isRight?: boolean) => {
    const defaultIconStyle = {
      minHeight: MIN_HEIGHT_INPUT,
      paddingHorizontal: 16,
      opacity: disabled ? 0.5 : 1,
      justifyContent: 'center' as ViewStyle['justifyContent'],
    };

    if (secureTextEntry && isRight && !rightIcon) {
      return (
        <IconComponent
          style={defaultIconStyle}
          size={20}
          color={Colors.blueyGrey || Colors.orange}
          name={secureEye ? 'eye' : 'eye-off'}
          type="ionicons"
          onPress={() => setSecureEye(prev => !prev)}
        />
      );
    }

    const [icon, iconStyle, onPressIcon] = isRight
      ? [rightIcon, rightIconContainerStyle, onRightIconPress]
      : [leftIcon, leftIconContainerStyle, onLeftIconPress];

    if (isIcon(icon)) {
      return (
        <IconComponent
          onPress={onPressIcon}
          style={StyleSheet.flatten([defaultIconStyle, iconStyle])}
          name={icon.name}
          size={icon.size || size}
          color={(icon.color as any) || Colors.secondaryText}
          type={icon.type}
        />
      );
    }

    return icon;
  };

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

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
        onFocus={_onFocus}
        onBlur={_onBlur}
        maxLength={maxLength}
        secureTextEntry={
          rightIcon ? props.secureTextEntry : props.secureTextEntry && secureEye
        }
        ref={e => {
          inputRef.current = e;
          typeof ref === 'function' && ref(e);
        }}
      />
    );
  };

  const _renderHint = () => {
    return (
      <Text margin={{left: 4}} color="red">
        {`${value.length}/${maxLength}`}
      </Text>
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
          backgroundColor="inputBG"
          radius={8}
          border={{
            width: 1,
            color:
              !hideFocus && error
                ? Colors.error
                : isFocused
                ? Colors.primary
                : Colors.border,
          }}
          style={inputContainerStyle}>
          {leftIcon && _renderIcon()}
          {_renderInput()}
          {(rightIcon || props.secureTextEntry) && _renderIcon(true)}
        </Block>
      </TouchableWithoutFeedback>
      <Block
        row
        justify={showError && error ? 'space-between' : 'flex-end'}
        align="flex-start"
        margin={{top: 4}}>
        {showError && error && _renderError()}
        {!!maxLength && _renderHint()}
      </Block>
    </Block>
  );
});

export default TextInput;
