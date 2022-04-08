import {Block, Button, FormInput} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTheme} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import {signUpValidate} from '../../../screens/Auth/RegisterScreen/validate';
import styles from './styles';

type FormProps = {
  username: string;
  password: string;
  email: string;
  fullName: string;
  confirmPassword: string;
};

interface SignUpFormProps {
  onSubmit: (values: FormProps) => void;
}

const RegisterForm = ({onSubmit}: SignUpFormProps) => {
  const {Colors} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(signUpValidate),
    mode: 'onChange',
  });

  return (
    <Block padding={{horizontal: 16}}>
      <FormInput
        control={control}
        name="fullName"
        placeholder="Họ và tên"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
        errorStyle={styles.errorStyle}
      />
      <Block height={25} />
      <FormInput
        control={control}
        name="email"
        placeholder="Email"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
        errorStyle={styles.errorStyle}
      />
      <Block height={25} />
      <FormInput
        control={control}
        name="username"
        placeholder="Tên đăng nhập"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
        errorStyle={styles.errorStyle}
      />
      <Block height={25} />
      <FormInput
        control={control}
        name="password"
        placeholder="Mật khẩu"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
        errorStyle={styles.errorStyle}
      />
      <Block height={25} />
      <FormInput
        control={control}
        name="confirmPassword"
        placeholder="Nhập lại mật khẩu"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
        error
        errorStyle={styles.errorStyle}
      />
      <Block height={34} />
      <Button
        title="Đăng ký"
        onPress={handleSubmit(onSubmit as any)}
        backgroundColor="white"
        disabled={!isValid}
      />
    </Block>
  );
};

export default RegisterForm;
