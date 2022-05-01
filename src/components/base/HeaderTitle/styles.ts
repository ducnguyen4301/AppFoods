import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  defaultStyle: {
    paddingVertical: getSize.m(6),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.s(6),
    backgroundColor: Colors.white,
  },
  opacity: {
    opacity: 0.5,
  },
});
