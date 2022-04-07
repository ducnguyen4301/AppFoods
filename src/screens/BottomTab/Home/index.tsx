import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t} = useTranslation('Home');
  return (
    <SafeAreaView>
      <Text>{t('home')}</Text>
    </SafeAreaView>
  );
};

export default Home;
