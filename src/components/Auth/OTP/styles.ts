import {Colors} from '@theme/color';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
const inputWidth = Math.round(width / 8);
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  txtOTP: {
    color: Colors.primaryText,
    textAlign: 'center',
    marginBottom: 5,
  },
  txtPhone: {
    color: Colors.primaryText,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 25,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: inputWidth / 2,
  },
  inputContainer: {
    width: inputWidth,
    height: inputWidth,
    borderBottomWidth: 1,
    borderColor: Colors.veryLightPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 25,
    paddingHorizontal: 15,
  },
  btnContinue: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 30,
    paddingVertical: 10,
  },
});
