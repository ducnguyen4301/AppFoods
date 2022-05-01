import {SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {HeaderTitle} from '@components';
import styles from './styles';
const Likes = () => {
  const {t} = useTranslation('Likes');
  return (
    <SafeAreaView>
      <HeaderTitle title={t('Yêu thích')} titleStyle={styles.headerTitle} />
    </SafeAreaView>
  );
};

export default Likes;
