import {Block, Button, FormInput, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTheme} from '@theme';
import {navigate} from 'navigation/NavigationServices';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {loginValidate} from '../../../screens/Auth/LoginScreen/validate';
import styles from './styles';

type LoginFormProps = {
  onSubmit: (values: {email: string; password: string}) => void;
};

const LoginForm = ({onSubmit}: LoginFormProps) => {
  const {Colors} = useTheme();
  const {t} = useTranslation();
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
        placeholder="Email/Tên đăng nhập"
        placeholderTextColor={Colors.secondaryText}
        inputStyle={styles.inputStyle}
        error
        errorStyle={styles.error}
      />
      <Block height={25} />
      <FormInput
        control={control}
        name="password"
        placeholder="Mật khẩu"
        placeholderTextColor={Colors.secondaryText}
        inputStyle={styles.inputStyle}
        secureTextEntry
        onSubmitEditing={handleSubmit(onSubmit as any)}
      />
      <Block margin={{top: 16}} alignSelf="flex-end">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate('LoginPhone')}>
          <Text color="#1877f2">{t('Đăng nhập bằng SMS')}</Text>
        </TouchableOpacity>
      </Block>
      <Block height={34} />
      <Button
        title="Đăng nhập"
        onPress={handleSubmit(onSubmit as any)}
        disabledBackground={Colors.secondaryText}
        disabled={!isValid}
      />
    </Block>
  );
};

export default LoginForm;
