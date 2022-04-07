import {Button, Text} from 'react-native';
import React from 'react';
import Block from '@components/Block';
import {CustomIcon} from '@assets/icons';
import {getSize} from '@utils/reponsive';
import {useTheme} from '@theme';
import {navigate} from 'navigation/NavigationServices';
import {useTranslation} from 'react-i18next';

const LoginRequired = () => {
  const {Colors} = useTheme();
  const {t} = useTranslation();
  return (
    <Block align="center" justify="center" flexGrow>
      <CustomIcon name="home" size={getSize.s(99)} color={Colors.orange} />
      <Text>{t('Need login to use this feature')}</Text>
      <Button title="Login" onPress={() => navigate('RegisterForm')} />
    </Block>
  );
};

export default LoginRequired;
