import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Block, Button, Text, TextInputOTP} from '@components';
import styles from './styles';

const inputs = Array(6).fill('');
const arrOTP = Array(6).fill('');
let newInputdex = 0;

const OTPS = () => {
  const inputRef = useRef<any>(null);
  const {t} = useTranslation();
  const [OTP, setOTP] = useState(arrOTP);
  const [nextInputdex, setNextInputdex] = useState(0);
  const handleChangeText = (text: string, _index: number) => {
    const newOTP = {...OTP};
    newOTP[_index] = text;
    setOTP(newOTP);
    const isLastInput = inputs.length - 1;
    if (!text) {
      newInputdex = _index === 0 ? 0 : _index - 1;
    } else {
      newInputdex = _index === isLastInput ? isLastInput : _index + 1;
    }
    setNextInputdex(newInputdex);
  };

  //console.log(newInputdex);

  useEffect(() => {
    inputRef.current?.focus();
  }, [nextInputdex]);

  const submitOTP = () => {
    Keyboard.dismiss();
    if (typeof OTP === 'object') {
      let values = '';
      Object.values(OTP).forEach(v => {
        values = values + v;
      });
    }
    console.log(OTP);
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
          {inputs.map((_value, _index) => {
            return (
              <Block key={_index.toString()} style={styles.inputContainer}>
                <TextInputOTP
                  value={OTP[_index]}
                  onChangeText={text => handleChangeText(text, _index)}
                  style={styles.input}
                  placeholder="0"
                  keyboardType="numeric"
                  maxLength={1}
                  ref={nextInputdex === _index ? inputRef : null}
                />
              </Block>
            );
          })}
        </Block>
        <Button
          title="Tiếp tục"
          onPress={submitOTP}
          style={styles.btnContinue}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPS;
