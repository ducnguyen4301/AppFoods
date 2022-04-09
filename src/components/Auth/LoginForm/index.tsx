import {Block, Button, FormInput, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTheme} from '@theme';
import {navigate} from 'navigation/NavigationServices';
import React from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import {loginValidate} from '../../../screens/Auth/LoginScreen/validate';
import styles from './styles';

type LoginFormProps = {
  onSubmit: (values: {username: string; password: string}) => void;
};

const LoginForm = ({onSubmit}: LoginFormProps) => {
  const {Colors} = useTheme();

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(loginValidate),
    mode: 'onChange',
  });

  return (
    <Block padding={{horizontal: 16}}>
      <FormInput
        control={control}
        name="username"
        placeholder="Tên đăng nhập hoặc email"
        placeholderTextColor={Colors.orange}
        inputStyle={styles.inputStyle}
        error
        errorStyle={styles.error}
      />
      <Block height={25} />
      <FormInput
        control={control}
        name="password"
        placeholder="Mật khẩu"
        placeholderTextColor={Colors.orange}
        inputStyle={styles.inputStyle}
        secureTextEntry
        onSubmitEditing={handleSubmit(() =>
          onSubmit({
            password: '',
            username: '',
          }),
        )}
      />
      <Block margin={{top: 16}} alignSelf="flex-end">
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('Home')}>
          <Text color="orange">Quên mật khẩu?</Text>
        </TouchableOpacity>
      </Block>
      <Block height={34} />
      <Button
        title="Đăng nhập"
        onPress={handleSubmit(() => onSubmit({username: '', password: ''}))}
        backgroundColor="orange"
        disabled={!isValid}
      />
    </Block>
  );
};

export default LoginForm;
