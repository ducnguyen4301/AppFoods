import {Colors} from '@theme/color';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
const inputWidth = Math.round(width / 6);
export default StyleSheet.create({
  inputContainer: {
    width: inputWidth,
    height: inputWidth,
    borderWidth: 2,
    borderColor: Colors.secondaryText,
  },
  input: {fontSize: 25},
});
