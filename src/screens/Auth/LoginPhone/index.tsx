import {CustomIcon} from '@assets/icons';
import {Block, Text} from '@components';
//import {navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LoginPhone} from '@components/Auth';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {loginPhone} from '@store/sagas/auth/slice';
const LoginScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const dispatch = useDispatch();
  const _loginAccount = (values: {phone: number}) => {
    dispatch(loginPhone(values));
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
        <LoginPhone onSubmit={_loginAccount} />
        <Block align="center" row margin={{top: 50}} justify="center">
          <Text color="secondaryText" style={styles.orText}>
            ----------------------
          </Text>
          <Text color="secondaryText" fontType="demiBold">
            HOẶC
          </Text>
          <Text color="secondaryText" style={styles.orText}>
            ----------------------
          </Text>
        </Block>
        <Block align="center" row margin={{top: 25}} justify="center">
          <TouchableOpacity style={styles.loginOtherGG}>
            <Text style={styles.loginOtherText}>Dang nhap voi Google</Text>
          </TouchableOpacity>
        </Block>
        <Block align="center" row margin={{top: 20}} justify="center">
          <TouchableOpacity style={styles.loginOtherFB}>
            <Text style={styles.loginOtherText}>Dang nhap voi FaceBook</Text>
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
