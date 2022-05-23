import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {HeaderProps, IconProps} from './type';
import CenterHeader from './CenterHeader';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {getIconComponent} from '@assets/icons';

const renderIcon = (
  icon: IconProps,
  position: 'left' | 'right',
  action?: () => void,
  customStyle?: ViewStyle | ViewStyle[],
) => {
  const IconComponent = getIconComponent(icon.type);
  if (IconComponent) {
    const iconColor = icon.color || 'text';
    return (
      <Block style={customStyle}>
        <TouchableOpacity onPress={action}>
          <IconComponent
            name={icon.name}
            size={icon.size || getSize.s(24)}
            color={(Colors as any)[iconColor] || iconColor}
          />
        </TouchableOpacity>
      </Block>
    );
  }
};

const Header: React.FC<HeaderProps> = ({
  containerStyle,
  headerRight,
  headerRightContainerStyle,
  headerLeft,
  headerLeftContainerStyle,
  headerCenter,
  headerCenterContainerStyle,
  title,
  headerRightIcon,
  headerLeftIcon,
  canGoBack,
  onHeaderRightPress,
  onHeaderLeftPress,
  showBorderBottom,
  titleStyle,
  mode,
}) => {
  const navigation = useNavigation();

  const _leftHeader = () => {
    if (canGoBack) {
      const iconDefault: IconProps = {
        name: 'ios-arrow-back',
        type: 'ionicons',
      };
      return renderIcon(
        iconDefault,
        'left',
        () => (onHeaderLeftPress ? onHeaderLeftPress() : navigation.goBack()),
        headerLeftContainerStyle,
      );
    }

    if (!canGoBack && headerLeftIcon) {
      return renderIcon(
        headerLeftIcon,
        'left',
        onHeaderLeftPress,
        headerLeftContainerStyle,
      );
    }
  };
  const _rightHeader = () => {
    if (headerRightIcon) {
      return renderIcon(
        headerRightIcon,
        'right',
        onHeaderRightPress,
        headerRightContainerStyle,
      );
    }
  };
  const headerStyles: any = [
    showBorderBottom && {
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee',
    },
    StyleSheet.flatten(containerStyle),
  ];

  if (mode === 'main') {
    return (
      <Block
        backgroundColor="white"
        height={56}
        row
        align="center"
        justify="center"
        padding={{horizontal: 16}}
        style={headerStyles}>
        <Block top={0} left={0} right={0} bottom={0} justify="center">
          <Text size={24} fontType="bold" style={titleStyle} lineHeight={36}>
            {title}
          </Text>
        </Block>
      </Block>
    );
  }

  return (
    <Block backgroundColor="white" style={headerStyles}>
      <Block
        row
        justify="space-between"
        align="center"
        padding={{horizontal: 10, vertical: 12}}>
        <CenterHeader
          content={headerCenter || title}
          containerStyle={headerCenterContainerStyle}
          titleStyle={titleStyle}
        />
        {headerLeft ? headerLeft : _leftHeader()}
        {headerRight ? headerRight : _rightHeader()}
      </Block>
    </Block>
  );
};

export default Header;
