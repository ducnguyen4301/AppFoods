import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
const MyOrders = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('orders')}</Text>
    </SafeAreaView>
  );
};

export default MyOrders;
