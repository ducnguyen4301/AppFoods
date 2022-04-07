import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  closeBtn: {
    padding: getSize.m(16),
    position: 'absolute',
    left: 0,
  },
  inputStyle: {borderBottomColor: Colors.white},
});
