import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {CustomIcon} from '@assets/icons';
import {Colors} from '@theme/color';
import {Block, Text} from '@components';
import Header from '@components/Home/Header';
import {Carousel} from '@components/Home';
const Home = () => {
  const {t} = useTranslation('Home');
  return (
    <SafeAreaView>
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
      <Block
        justify="space-around"
        align="center"
        margin={{horizontal: 10}}
        style={styles.header}>
        <Header onTextChange={() => {}} />
      </Block>
      <Carousel />
    </SafeAreaView>
  );
};

export default Home;
