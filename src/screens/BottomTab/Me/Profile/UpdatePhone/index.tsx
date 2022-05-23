import {SafeAreaView} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle} from '@components';
import {useTranslation} from 'react-i18next';
import {navigate} from 'navigation/NavigationServices';
import {MenuUpdateProfile} from '@components/Me';

const UpdatePhone = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <HeaderTitle title={t('Số điện thoại')} />
      <Block height={10} />
      <MenuUpdateProfile
        title={t('Số điện thoại')}
        titleEnd={t('*******803')}
      />
      <Block padding={10}>
        <Button
          title={t('Cập nhật số điện thoại')}
          onPress={() => navigate('')}
        />
      </Block>
    </SafeAreaView>
  );
};

export default UpdatePhone;
