import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';
import {Colors} from '@theme/color';
export default StyleSheet.create({
  container: {flex: 1},
  closeBtn: {
    padding: getSize.m(16),
    position: 'absolute',
    left: 0,
  },
  orText: {
    textDecorationLine: 'line-through',
  },
  loginOtherGG: {
    backgroundColor: Colors.primary,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(90),
  },
  loginOtherFB: {
    backgroundColor: Colors.primary,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(81),
  },
  loginOtherText: {
    color: Colors.white,
    fontWeight: '500',
  },
});
