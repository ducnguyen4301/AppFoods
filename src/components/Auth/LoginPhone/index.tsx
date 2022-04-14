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

type LoginPhoneProps = {
  onSubmit: (values: {phone: number}) => void;
};

const LoginPhone = ({onSubmit}: LoginPhoneProps) => {
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
        placeholder="Số điện thoại"
        placeholderTextColor={Colors.secondaryText}
        inputStyle={styles.inputStyle}
        error
        errorStyle={styles.error}
        keyboardType={'numeric'}
      />
      <Block margin={{top: 16}} alignSelf="flex-end">
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('Login')}>
          <Text color="#1877f2">{t('Đăng nhập bằng Mật Khẩu')}</Text>
        </TouchableOpacity>
      </Block>
      <Block height={34} />
      <Button
        title="Tiếp tục"
        onPress={handleSubmit(onSubmit as any)}
        backgroundColor="gray"
        disabled={!isValid}
      />
    </Block>
  );
};

export default LoginPhone;
