import {Block, IconComponent, Text, FormContainer} from '@components';
//import {navigate} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//import {useDispatch} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
//import {recoveryAccount} from '@store/sagas/auth/slice';
import {RecoveryForm} from '@components/Auth';
import localImages from '@assets';
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
            <Image source={localImages().logo} />
            <Text
              margin={{vertical: 50}}
              size={28}
              color={Colors.secondaryText}>
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
