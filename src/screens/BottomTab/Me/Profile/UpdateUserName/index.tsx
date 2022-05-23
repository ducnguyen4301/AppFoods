import {SafeAreaView} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle} from '@components';
import {useTranslation} from 'react-i18next';
import {MenuUpdateProfile} from '@components/Me';
import {navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';

const UpdateUserName = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  return (
    <SafeAreaView>
      <HeaderTitle title={t('Tên')} />
      <Block height={10} />
      <Block>
        <MenuUpdateProfile
          title={t('Tên')}
          titleEnd={t('foodee_1fmkfm3')}
          type="username"
        />
      </Block>
      <Block height={15} />
      <Block padding={10}>
        <Button
          title={t('Lưu')}
          onPress={() => navigate('')}
          disabled
          disabledBackground={Colors.whiteSmoke}
        />
      </Block>
    </SafeAreaView>
  );
};

export default UpdateUserName;
