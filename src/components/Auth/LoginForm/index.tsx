import {Block, Button, FormInput, Text} from '@components';
import TextInput from '@components/TextInput';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import {loginValidate} from '../../../screens/Auth/LoginScreen/validate';
import styles from './styles';

type LoginFormProps = {
  onSubmit: (values: {username: string; password: string}) => void;
};

const LoginForm = ({onSubmit}: LoginFormProps) => {
  const navigation = useNavigation();
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
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
      />
      <FormInput
        control={control}
        name="username"
        placeholder="Tên đăng nhập hoặc email"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}>
        <TextInput showError error>
          aaaa
        </TextInput>
      </FormInput>
      <Block height={25} />
      <FormInput
        control={control}
        name="password"
        placeholder="Mật khẩu"
        placeholderTextColor={Colors.white}
        inputStyle={styles.inputStyle}
        onSubmitEditing={handleSubmit(onSubmit)}
      />
      <Block margin={{top: 16}} alignSelf="flex-end">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate()}>
          <Text color="white">Quên mật khẩu?</Text>
        </TouchableOpacity>
      </Block>
      <Block height={34} />
      <Button />
    </Block>
  );
};

export default LoginForm;
