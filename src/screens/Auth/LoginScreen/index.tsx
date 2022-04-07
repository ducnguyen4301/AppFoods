import {CustomIcon} from '@assets/icons';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from 'navigation/NavigationServices';
//import {LoginForm} from '@components/Auth';
import styles from './styles';
import localImages from '@assets';
const LoginScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const {Colors} = useTheme();

  return (
    <ImageBackground source={localImages().logo} style={styles.container}>
      <Block flexGrow style={{paddingTop: top}}>
        <Block margin={{top: 84}}>
          <CustomIcon name="logo" size={getSize.s(91)} color={Colors.white} />
          <Text margin={{vertical: 50}} size={28} color="white">
            Đăng nhập
          </Text>
        </Block>
        {/* <LoginForm onSubmit={_loginAccount} /> */}
        <Block align="center" row margin={{top: 50}} justify="center">
          <Text color="white">Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('RegisterScreen')}>
            <Text color="white" fontType="bold" style={styles.registerText}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <TouchableOpacity
        style={[styles.closeBtn, {top}]}
        onPress={() => navigation.goBack()}>
        <CustomIcon name="close" color={Colors.white} size={getSize.s(16)} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;
