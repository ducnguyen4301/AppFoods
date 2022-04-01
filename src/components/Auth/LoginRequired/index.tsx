import {Button, Text} from 'react-native';
import React from 'react';
import Block from '@components/Block';
import {CustomIcon} from '@assets/icons';
import {getSize} from '@utils/reponsive';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/native';

const LoginRequired = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  return (
    <Block align="center" justify="center" flexGrow>
      <CustomIcon name="home" size={getSize.s(99)} color={Colors.orange} />
      <Text>Need login to use this feature</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('SignInScreen' as never)}
      />
    </Block>
  );
};

export default LoginRequired;
