import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
const Likes = () => {
  const {t} = useTranslation('Likes');
  return (
    <SafeAreaView>
      <Text>{t('like')}</Text>
    </SafeAreaView>
  );
};

export default Likes;
