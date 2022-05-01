import {SafeAreaView} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {MenuItem} from '@components/ProfileUser';
import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {Block, HeaderTitle, Text} from '@components';
import styles from './styles';
const Notifications = () => {
  const {t} = useTranslation('Notification');
  return (
    <SafeAreaView>
      <HeaderTitle
        title="Thông báo"
        showBorderBottom
        titleStyle={styles.headerTitle}
      />
      <MenuItem
        title={t('Khuyến mãi')}
        icon={{
          color: Colors.orangeJuice,
          name: 'sell',
          size: getSize.s(22),
        }}
      />
      <MenuItem
        title={t('Tin tức')}
        icon={{
          color: Colors.orangeJuice,
          name: 'yell',
          size: getSize.s(22),
        }}
      />
      <Block
        row
        align="center"
        justify="center"
        padding={10}
        backgroundColor={Colors.whiteSmoke}>
        <Text color={Colors.secondaryText} fontType="regular">
          Cập nhật quan trọng
        </Text>
        <Block flex row align="center" justify="flex-end">
          <Text color={Colors.secondaryText} fontType="regular">
            Đọc tất cả
          </Text>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default Notifications;
