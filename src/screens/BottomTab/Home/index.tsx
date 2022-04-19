/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {Block, IconComponent, Text} from '@components';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const {t} = useTranslation('Home');
  return (
    <SafeAreaView>
      <Block row align="center" margin={{bottom: 10, top: 10}}>
        <Block row align="center">
          <Text
            size={13}
            margin={{left: 7, right: 4}}
            color="orange"
            style={{fontFamily: 'BR Firma Bold'}}>
            {t('Giao hàng đến:')}
          </Text>
        </Block>
      </Block>
      <Block row align="center">
        <IconComponent name="location" type="custom" color="orange" />
        <Text
          size={13}
          margin={{right: 4}}
          color="orange"
          style={{fontFamily: 'BR Firma Bold'}}>
          {t('201/10 Đ.Lê Văn Việt, Hiệp Phú, Quận 9, Thành phố HCM')}
        </Text>
        <IconComponent name="chevron-right" type="custom" color="orange" />
      </Block>
    </SafeAreaView>
  );
};

export default Home;
