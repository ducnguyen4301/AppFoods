import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(48),
    height: getSize.s(48),
    borderRadius: getSize.s(48) / 2,
    borderColor: Colors.white,
    borderWidth: getSize.s(2),
    backgroundColor: Colors.background,
  },
});
