import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderProps} from './type';
import CenterHeader from './CenterHeader';

const Header: React.FC<HeaderProps> = ({
  containerStyle,
  headerCenter,
  headerCenterContainerStyle,
  title,
  showBorderBottom,
  titleStyle,
  mode,
}) => {
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
      <Block row align="center" padding={{horizontal: 16, vertical: 12}}>
        <CenterHeader
          content={headerCenter || title}
          containerStyle={headerCenterContainerStyle}
          titleStyle={titleStyle}
        />
      </Block>
    </Block>
  );
};

export default Header;
