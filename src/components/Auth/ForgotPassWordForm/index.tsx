import {Block, Button, FormInput} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTheme} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import styles from './styles';
import {recoveryValidate} from '../../../screens/Auth/ForgotPassScreen/validate';

interface RecoveryFormProps {
  onSubmit: (values: {email: string}) => void;
}

const RecoveryForm = ({onSubmit}: RecoveryFormProps) => {
  const {Colors} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(recoveryValidate),
    mode: 'onChange',
  });

  return (
    <Block padding={{horizontal: 16}}>
      <FormInput
        control={control}
        name="email"
        placeholder="Nhập địa chỉ email"
        placeholderTextColor={Colors.white70}
        inputStyle={styles.inputStyle}
        leftIcon={{type: 'fontAwesome', name: 'user-o'}}
      />
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

export default RecoveryForm;
