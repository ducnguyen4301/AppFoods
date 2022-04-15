import {Block, IconComponent, Text, FormContainer} from '@components';
//import {navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//import {useDispatch} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
//import {recoveryAccount} from '@store/sagas/auth/slice';
import {RecoveryForm} from '@components/Auth';
const ForgotPass = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {Colors} = useTheme();
  //const dispatch = useDispatch();
  const _recoveryPass = (values: {email: string}) => {
    //dispatch(recoveryAccount(values));
    console.log(values);
  };

  return (
    <Block style={styles.container}>
      <FormContainer>
        <Block flexGrow style={{paddingTop: top}}>
          <Block margin={{top: 84}} align="center">
            <IconComponent
              name="logo"
              type="custom"
              size={getSize.s(60)}
              color={Colors.orangeJuice}
            />
            <Text margin={{vertical: 50}} size={28} color="white">
              Khôi phục mật khẩu
            </Text>
          </Block>
          <RecoveryForm onSubmit={_recoveryPass} />
        </Block>
      </FormContainer>
      <TouchableOpacity
        style={[styles.closeBtn, {top}]}
        onPress={() => navigation.goBack()}>
        <IconComponent
          name="chevron-left"
          type="custom"
          color={Colors.orange}
          size={getSize.s(20)}
        />
      </TouchableOpacity>
    </Block>
  );
};

export default ForgotPass;
