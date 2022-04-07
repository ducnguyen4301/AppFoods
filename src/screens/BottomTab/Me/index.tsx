import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
const Me = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('me')}</Text>
    </SafeAreaView>
  );
};

export default Me;
