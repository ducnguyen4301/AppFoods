import {SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle, Text} from '@components';
import {useTranslation} from 'react-i18next';
import {goBack, navigate} from 'navigation/NavigationServices';
import {MenuUpdateProfile} from '@components/Me';
import {CustomIcon} from '@assets/icons';
import {useTheme} from '@theme';

const UpdatePhone = () => {
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
            <Text size={20}>{t('Số điện thoại')}</Text>
          </Block>
        }
      />
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
