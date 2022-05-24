import {Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle, Text} from '@components';
import {goBack} from 'navigation/NavigationServices';
import {CustomIcon} from '@assets/icons';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@theme';
import {MenuUpdateProfile} from '@components/Me';

const PassWord = () => {
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
            <Text size={20}>{t('Mật khẩu')}</Text>
          </Block>
        }
      />
      <Block padding={{top: 15, bottom: 4, horizontal: 10}}>
        <Text size={12} color="secondaryText">
          {t('Nhập mật khẩu mới')}
        </Text>
      </Block>
      <MenuUpdateProfile title={'Mật khẩu mới'} />
      <MenuUpdateProfile title={'Xác nhận'} />
      <Block
        padding={10}
        backgroundColor={Colors.white}
        border={{top: {color: Colors.border, width: 0.5}}}>
        <Button
          title={t('Lưu')}
          onPress={() => {
            Alert.alert('Mật khẩu ít nhất 4 ký tự');
          }}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text margin={{top: 12}} center color="primary">
            {t('Quên mật khẩu')}
          </Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default PassWord;
