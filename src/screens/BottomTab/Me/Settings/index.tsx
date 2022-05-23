import {SafeAreaView} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {MenuItem} from '@components/Me';
import {useTranslation} from 'react-i18next';

const Settings = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <HeaderTitle title="Cài đặt" />
      <Block height={20} />
      <Text size={11}>{t('CÀI ĐẶT TÀI KHOẢN')}</Text>
      <Block backgroundColor="white">
        <MenuItem
          title={t('Thông tin & liên hệ')}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
        />
        <MenuItem
          title={t('Mật khẩu')}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
        />
      </Block>
      <Block height={30} />
      <Text size={11}>{t('CÀI ĐẶT ỨNG DỤNG')}</Text>
      <Block backgroundColor="white">
        <MenuItem
          title={t('Đổi ngôn ngữ')}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
        />
        <MenuItem
          title={t('Cài đặt thông báo')}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
        />
      </Block>
    </SafeAreaView>
  );
};

export default Settings;
