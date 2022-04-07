import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
const Notifications = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('notify')}</Text>
    </SafeAreaView>
  );
};

export default Notifications;
