import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import Block from '@components/Block';
import Text from '@components/Text';
import {useTranslation} from 'react-i18next';
import TextInput from '@components/TextInput';
import styles from './styles';

const inputs = Array(6).fill('');
const OTP = () => {
  const {t} = useTranslation();
  return (
    <KeyboardAvoidingView>
      <Text>{t('Mã xác minh của bạn đã được gửi tới số')}</Text>
      <Block>
        {inputs.map((_inp, _index) => {
          return (
            <Block
              key={_index.toString()}
              justify="center"
              align="center"
              style={styles.inputContainer}>
              <TextInput keyboardType="numeric" maxLength={1} />
            </Block>
          );
        })}
      </Block>
    </KeyboardAvoidingView>
  );
};

export default OTP;
