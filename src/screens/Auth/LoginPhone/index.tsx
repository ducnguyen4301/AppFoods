import {CustomIcon} from '@assets/icons';
import {Block} from '@components';
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
