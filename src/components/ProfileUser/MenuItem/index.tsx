import React from 'react';
import {Text, Block, IconComponent} from '@components';
import {TouchableOpacity} from 'react-native';
import {getSize} from '@utils/reponsive';
import {Colors} from '@theme/color';
import {CustomIcon, IconType} from '@assets/icons';
import {useTranslation} from 'react-i18next';

interface MenuItemProps {
  title: string;
  icon: {
    color?: string;
    size?: number;
    name?: string;
    type?: IconType;
  };
  locationType?: 'bookmark';
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
  locationType,
  onPress,
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity activeOpacity={0.5} {...{onPress}}>
      <Block align="center" row padding={{horizontal: 16, vertical: 12}}>
        {name && (
          <Block square={25} align="center" justify="center">
            <IconComponent name={name} type={type} size={size} color={color} />
          </Block>
        )}
        <Text margin={{left: {name} ? 10 : 0}} fontType="regular" size={16}>
          {title}
        </Text>
        {locationType ? (
          <Block flex row align="center" justify="flex-end">
            <Block square={25} align="center" justify="center">
              <Text color="primary">{t('Sửa')}</Text>
            </Block>
          </Block>
        ) : (
          <Block flex row justify="flex-end">
            <Block square={25} align="center" justify="center">
              <CustomIcon name="chevron-right" />
            </Block>
          </Block>
        )}
      </Block>
    </TouchableOpacity>
  );
};
export default MenuItem;
