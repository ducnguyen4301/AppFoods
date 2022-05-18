import {SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {Block, Text} from '@components';
import {useTheme} from '@theme';
const MyOrders = () => {
  const {t} = useTranslation('MyOrders');
  const {Colors} = useTheme();
  return (
    <SafeAreaView>
      <Block row padding={10}>
        <TouchableOpacity>
          <Text color={Colors.orangeJuice} fontType="regular" size={15}>
            {t('Đang đến')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={Colors.orangeJuice} fontType="regular" size={15}>
            {t('Lịch sử')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={Colors.orangeJuice} fontType="regular" size={15}>
            {t('Đánh giá')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={Colors.orangeJuice} fontType="regular" size={15}>
            {t('Đơn nháp')}
          </Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default MyOrders;
