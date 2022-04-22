import React from 'react';
import {Text, Block, IconComponent} from '@components';
import {TouchableOpacity} from 'react-native';
import {getSize} from '@utils/reponsive';
import {Colors} from '@theme/color';
import {IconType} from '@assets/icons';

interface MenuItemProps {
  title: string;
  icon: {
    color?: string;
    size?: number;
    name?: string;
    type?: IconType;
  };
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon: {
    color = Colors.whiteSmoke,
    size = getSize.s(16),
    name = undefined,
    type = 'custom',
  },
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} {...{onPress}}>
      <Block align="center" row padding={{horizontal: 16, vertical: 14}}>
        {name && (
          <Block square={25} align="center" justify="center">
            <IconComponent name={name} type={type} size={size} color={color} />
          </Block>
        )}
        <Text margin={{left: 8}} fontType="regular" size={16}>
          {title}
        </Text>
        <Block alignSelf="center">
          <IconComponent
            name="chevron-right"
            type="custom"
            color="secondaryText"
          />
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default MenuItem;
