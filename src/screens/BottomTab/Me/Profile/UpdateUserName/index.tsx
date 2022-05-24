import {SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle, Text} from '@components';
import {useTranslation} from 'react-i18next';
import {MenuUpdateProfile} from '@components/Me';
import {goBack, navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {CustomIcon} from '@assets/icons';

const UpdateUserName = () => {
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
            <Text size={20}>{t('Tên')}</Text>
          </Block>
        }
      />
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
