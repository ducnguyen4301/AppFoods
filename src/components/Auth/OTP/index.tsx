import {Keyboard, SafeAreaView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Block, Button, Text, TextInputOTP} from '@components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const inputs = Array(6).fill('');
let newInputdex = 0;

const OTPFields = () => {
  const inputRef = useRef<any>(null);
  const {t} = useTranslation();
  const [OTP, setOTP] = useState<string[]>(Array(6).fill(''));
  const [nextInputdex, setNextInputdex] = useState<number>(0);
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
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        enableResetScrollToCoords={false}>
        {/* behavior={Platform.select({ios: 'padding', android: 'height'})} */}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OTPFields;
