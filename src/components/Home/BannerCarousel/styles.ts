import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  slideImg: {
    height: getSize.s(131),
    width: getSize.s(343),
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    paddingHorizontal: getSize.m(16),
    paddingVertical: getSize.m(16),
  },
  slideItem: {
    borderRadius: getSize.m(10),
    overflow: 'hidden',
    borderWidth: getSize.m(1),
    borderColor: Colors.border,
  },
});
