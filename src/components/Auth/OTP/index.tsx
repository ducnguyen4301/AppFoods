import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Block from '@components/Block';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const inputs = Array(6).fill('');
const arrOTP = Array(6).fill('');
let newInputdex = 0;
const OTPS = () => {
  const input = useRef();
  const {t} = useTranslation();
  const [OTP, setOTP] = useState(arrOTP);
  const [nextInputdex, setNextInputdex] = useState(0);
  const handleChangeText = (text: string, _index: number) => {
    const newOTP = {...OTP};
    newOTP[_index] = text;
    setOTP(newOTP);
    const lastInputdex = inputs.length - 1;
    if (!text) {
      newInputdex = _index === 0 ? 0 : _index - 1;
    } else {
      newInputdex = _index === lastInputdex ? lastInputdex : _index + 1;
    }
    setNextInputdex(newInputdex);
  };
  useEffect(() => {}, [nextInputdex]);

  const submitOTP = () => {
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ios: 'padding', android: 'height'})}>
        <Block>
          <Text style={styles.txtOTP}>
            {t('Mã xác minh của bạn đã được gửi tới số')}
          </Text>
          <Text style={styles.txtPhone}>0333333333</Text>
        </Block>
        <Block style={styles.otpContainer}>
          {inputs.map((_inp, _index) => {
            return (
              <Block key={_index.toString()} style={styles.inputContainer}>
                <TextInput
                  value={OTP[_index]}
                  onChangeText={text => handleChangeText(text, _index)}
                  style={styles.input}
                  placeholder="0"
                  keyboardType="numeric"
                  maxLength={1}
                  ref={nextInputdex === _index ? input : null}
                />
              </Block>
            );
          })}
        </Block>
        <TouchableOpacity style={styles.btnContinue} onPress={submitOTP}>
          <Text style={styles.txtContinue}>{t('Tiếp tục')}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPS;
