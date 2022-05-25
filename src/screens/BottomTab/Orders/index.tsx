import {SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {Block, Text} from '@components';
import {useTheme} from '@theme';
import Banner from '@components/Home/BannerCarousel/SlideShow';
import FastImage from 'react-native-fast-image';
import localImages from '@assets';
import styles from './styles';
const MyOrders = () => {
  const {t} = useTranslation('MyOrders');
  const {Colors} = useTheme();
  return (
    <SafeAreaView>
      <Block row padding={10} justify="space-between">
        <Block>
          <TouchableOpacity>
            <Text color={Colors.orangeJuice} fontType="regular" size={15}>
              {t('Đang đến')}
            </Text>
          </TouchableOpacity>
          <Block
            border={{bottom: {width: 1.25, color: Colors.orangeJuice}}}
            margin={{top: 10}}
          />
        </Block>
        <TouchableOpacity onPress={() => {}}>
          <Text color={Colors.primaryText} fontType="regular" size={15}>
            {t('Lịch sử')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={Colors.primaryText} fontType="regular" size={15}>
            {t('Đánh giá')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={Colors.primaryText} fontType="regular" size={15}>
            {t('Đơn nháp')}
          </Text>
        </TouchableOpacity>
      </Block>

      <Banner />
      <Block margin={{vertical: 50}} justify="center" align="center">
        <FastImage source={localImages().logo} style={styles.image} />
      </Block>
      <Block justify="center" align="center">
        <Text size={16}>{t('Quên chưa đặt món rồi nè bạn ơi?')}</Text>
        <Text margin={{top: 10, horizontal: 20}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          sit, iste iusto magnam, error laboriosam aut beatae aperiam
          perspiciatis dolore ducimus tenetur eos vel veritatis voluptate
          impedit esse ratione? Repudiandae.
        </Text>
      </Block>
    </SafeAreaView>
  );
};

export default MyOrders;
