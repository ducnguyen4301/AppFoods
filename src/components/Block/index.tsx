import {useTheme} from '@theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  createDefaultStyle,
  handleGutter,
  handleInset,
  isNumber,
  isUndefined,
} from '../utils';
import {BlockProps} from './types';

const Block = React.forwardRef<any, BlockProps>((props, ref) => {
  const {Colors} = useTheme();
  const safeArea = useSafeAreaInsets();

  const {
    children,
    style,
    width,
    height,
    backgroundColor,
    align,
    justify,
    row,
    position,
    top,
    bottom,
    left,
    right,
    padding,
    margin,
    shadow,
    overflow,
    ...rest
  } = props;

  const blockStyles = StyleSheet.flatten([
    createDefaultStyle(props),
    width && {width: isNumber(width) ? width : width},
    height && {height: isNumber(height) ? height : height},
    align && {alignItems: align},
    justify && {justifyContent: justify},
    row && {flexDirection: 'row'},
    position && {position},
    !isUndefined(top) && {top},
    !isUndefined(bottom) && {bottom},
    !isUndefined(left) && {left},
    !isUndefined(right) && {right},
    overflow && {overflow},
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    shadow && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    handleInset(props, safeArea, padding),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor] || backgroundColor,
    },
    style,
  ]);

  return (
    <View {...rest} ref={ref} style={blockStyles}>
      {children}
    </View>
  );
});

export default Block;
