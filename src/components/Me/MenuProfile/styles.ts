import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: getSize.s(48) / 2,
  },
});
