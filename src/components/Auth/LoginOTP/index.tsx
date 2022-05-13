import {Block, Button, FormInput, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {phoneValidate} from '@screens/Auth/LoginPhone/validatePhone';
import {useTheme} from '@theme';
import {navigate} from 'navigation/NavigationServices';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

type LoginPhoneProps = {
  onSubmit: (values: {phoneNumber: number}) => void;
};

const LoginOTP = ({onSubmit}: LoginPhoneProps) => {
  const {Colors} = useTheme();
  const {t} = useTranslation();

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(phoneValidate),
    mode: 'onChange',
  });

  return (
    <Block padding={{horizontal: 16}}>
      <FormInput
        control={control}
        name="phone"
        placeholder="Số điện thoại"
        placeholderTextColor={Colors.secondaryText}
        inputStyle={styles.inputStyle}
        error
        errorStyle={styles.error}
        keyboardType={'numeric'}
      />
      <Block margin={{top: 16}} alignSelf="flex-end">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate('LoginScreen')}>
          <Text color={Colors.primary}>{t('Đăng nhập bằng Mật Khẩu')}</Text>
        </TouchableOpacity>
      </Block>
      <Block height={34} />
      <Button
        title="Tiếp tục"
        onPress={handleSubmit(onSubmit as any)}
        disabledBackground={Colors.secondaryText}
        disabled={!isValid}
      />
    </Block>
  );
};

export default LoginOTP;
