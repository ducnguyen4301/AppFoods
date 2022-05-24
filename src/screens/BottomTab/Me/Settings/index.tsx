import {SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {MenuItem} from '@components/Me';
import {useTranslation} from 'react-i18next';
import {CustomIcon} from '@assets/icons';
import {goBack, navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';

const Settings = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  return (
    <SafeAreaView>
      <HeaderTitle
        headerLeft={
          <Block row align="center" justify="center">
            <Block padding={{right: 10}}>
              <TouchableOpacity onPress={() => goBack()}>
                <CustomIcon
                  name="chevron-left"
                  size={20}
                  color={Colors.orangeJuice}
                />
              </TouchableOpacity>
            </Block>
            <Text size={20}>{t('Cài đặt')}</Text>
          </Block>
        }
      />
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
          onPress={() => navigate('Profile')}
        />
        <MenuItem
          title={t('Mật khẩu')}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
          onPress={() => navigate('Password')}
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
