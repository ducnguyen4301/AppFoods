import {CustomIcon} from '@assets/icons';
import {Block, FormContainer, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import {cloneDeep} from 'lodash';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RegisterForm} from '@components/Auth';
import styles from './styles';

type FormProps = {
  username: string;
  password: string;
  email: string;
  fullName: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const {Colors} = useTheme();
  // const dispatch = useDispatch();

  const _signUpAccount = (values: FormProps) => {
    const params: any = cloneDeep(values);
    delete params.confirmPassword;
    console.log(params);
  };

  return (
    <Block style={styles.container}>
      <FormContainer>
        <Block flexGrow style={{paddingTop: top}}>
          <Block margin={{top: 60}} align="center">
            <CustomIcon
              name="user"
              size={getSize.s(91)}
              color={Colors.orange}
            />
            <Text margin={{vertical: 26}} size={28} color="orange">
              Đăng ký
            </Text>
          </Block>
          <RegisterForm onSubmit={_signUpAccount} />
        </Block>
      </FormContainer>
      <TouchableOpacity
        style={[styles.closeBtn, {top}]}
        onPress={() => navigation.goBack()}>
        <CustomIcon
          name="chevron-left"
          color={Colors.orange}
          size={getSize.s(16)}
        />
      </TouchableOpacity>
    </Block>
  );
};

export default RegisterScreen;
