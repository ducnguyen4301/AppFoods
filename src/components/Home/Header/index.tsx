import React from 'react';
import {Block} from '@components';
import {TouchableOpacity} from 'react-native';
import Text from '@components/base/Text';
import {navigate} from 'navigation/NavigationServices';
import {CustomIcon} from '@assets/icons';
import styles from './styles';
import {Colors} from '@theme/color';
import {useTranslation} from 'react-i18next';

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
}

const Header: React.FC<SearchBarProps> = ({}) => {
  const {t} = useTranslation('Home');
  return (
    <>
      <Block row align="center" margin={{bottom: 10, top: 10, horizontal: 10}}>
        <Block row align="center">
          <Text size={13} color="secondaryText" style={styles.location}>
            {t('Giao hàng đến:')}
          </Text>
        </Block>
      </Block>
      <Block row align="center" margin={{horizontal: 10}}>
        <CustomIcon name="location" color={Colors.orangeJuice} size={15} />
        <Text
          size={13}
          margin={{left: 2, right: 2}}
          color="primaryText"
          style={styles.location}>
          {t('201/10 Đ.Lê Văn Việt, Hiệp Phú, Quận 9, Thành phố HCM')}
        </Text>
        <CustomIcon
          name="chevron-right"
          color={Colors.secondaryText}
          size={15}
        />
      </Block>
      <Block style={styles.container}>
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigate('SearchScreen')}>
          <CustomIcon name="search" size={15} />
          <Text
            flex
            color="veryLightPink"
            padding={{horizontal: 5, vertical: 8}}>
            Search Foods
          </Text>
        </TouchableOpacity>
      </Block>
    </>
  );
};

export default Header;
