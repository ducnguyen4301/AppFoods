import {CustomIcon} from '@assets/icons';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from 'navigation/NavigationServices';
import {LoginForm} from '@components/Auth';
//import {useDispatch} from 'react-redux';
import styles from './styles';
import localImages from '@assets';
const LoginScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const {Colors} = useTheme();
  //const dispatch = useDispatch();
  const _loginAccount = (values: {username: string; password: string}) => {
    console.log(values);
  };
  return (
    <ImageBackground source={localImages().logo} style={styles.container}>
      <Block flexGrow style={{paddingTop: top}}>
        <Block margin={{top: 84}}>
          <CustomIcon name="home" size={getSize.s(91)} color={Colors.orange} />
          <Text margin={{vertical: 50}} size={28} color="orange">
            Đăng nhập
          </Text>
        </Block>
        <LoginForm onSubmit={_loginAccount} />
        <Block align="center" row margin={{top: 50}} justify="center">
          <Text color="orange">Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text color="orange" fontType="bold" style={styles.registerText}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <TouchableOpacity
        style={[styles.closeBtn, {top}]}
        onPress={() => navigation.goBack()}>
        <CustomIcon
          name="chevron-left"
          color={Colors.orange}
          size={getSize.s(20)}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;
