import {Colors} from '@theme/color';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
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
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 30,
    paddingVertical: 10,
  },
  txtContinue: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
