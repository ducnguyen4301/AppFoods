import {useTheme} from '@theme';
import React, {Children} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IconComponent from '../Icon';
import Block from '../Block';
import Text from '../Text';
import {isIcon, isString} from '../../utils';
import {RadioGroupProps, RadioProps} from './types';

const Radio: React.FC<RadioProps> = props => {
  const {Colors} = useTheme();
  const {
    checked,
    onChange,
    disabled,
    children,
    color = 'primaryText',
    containerStyle,
    type = 'radio',
    position = 'left',
    radioIcon,
    radioIconContainerStyle,
    radioIconSize,
    contentContainerStyle,
  } = props;

  const containerStyles = StyleSheet.flatten([
    styles.container,
    containerStyle,
    disabled && {opacity: 0.5},
  ]);

  const _renderIcon = () => {
    if (!radioIcon) {
      let iconName = checked
        ? 'radio-button-checked'
        : 'radio-button-unchecked';
      if (type === 'checkbox') {
        iconName = checked ? 'check-box' : 'check-box-outline-blank';
      } else if (type === 'checkbox-circle') {
        iconName = checked ? 'check-circle' : 'radio-button-unchecked';
      }
      return (
        <IconComponent
          style={StyleSheet.flatten(radioIconContainerStyle)}
          name={iconName}
          size={radioIconSize || 24}
          color={checked ? Colors.primary : Colors.secondaryText}
          type="materialIcons"
        />
      );
    }

    if (isIcon(radioIcon)) {
      return (
        <IconComponent
          style={StyleSheet.flatten(radioIconContainerStyle)}
          name={radioIcon.name}
          size={radioIcon.size || 24}
          color={radioIcon.color ? Colors[color] : color}
          type={radioIcon.type}
        />
      );
    }

    return radioIcon;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled}
      onPress={() => onChange && onChange(!checked)}
      style={containerStyles}>
      <Block
        row
        align="center"
        opacity={disabled ? 0.6 : 1}
        style={contentContainerStyle}>
        {position !== 'right' && _renderIcon()}
        {isString(children) ? (
          <Text
            padding={{left: 6}}
            color={color ? Colors[color] || color : Colors.primaryText}>
            {children}
          </Text>
        ) : (
          children
        )}
        {position === 'right' && _renderIcon()}
      </Block>
    </TouchableOpacity>
  );
};

export default Radio;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});

export const RadioGroup = ({
  children,
  onSelected,
  selected,
  containerStyle,
}: RadioGroupProps) => {
  const _getChildren = () =>
    Children.map(children, child => {
      if (child.type?.name === 'Radio') {
        return React.createElement(Radio, {
          ...child.props,
          onChange: () => onSelected && onSelected(child.props.value),
          checked: selected === child.props.value,
        });
      } else {
        console.log('"Radio Group" just support "Radio" component');
        return;
      }
    });

  return <Block style={containerStyle}>{_getChildren()}</Block>;
};
