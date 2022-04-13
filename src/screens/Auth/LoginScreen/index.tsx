import {CustomIcon} from '@assets/icons';
import {Block, Text} from '@components';
import {navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LoginForm} from '@components/Auth';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {login} from '@store/sagas/auth/slice';
const LoginScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const dispatch = useDispatch();
  const _loginAccount = (values: {email: string; password: string}) => {
    dispatch(login(values));
  };

  return (
    <Block style={styles.container}>
      <Block flexGrow style={{paddingTop: top}}>
        <Block margin={{vertical: 26, top: 84}} align="center">
          <CustomIcon
            name="heart-o"
            size={getSize.s(35)}
            color={Colors.orange}
          />
        </Block>
        <LoginForm onSubmit={_loginAccount} />
        <Block align="center" row margin={{top: 50}} justify="center">
          <Text color="orange">Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('RegisterScreen')}>
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
    </Block>
  );
};

export default LoginScreen;
