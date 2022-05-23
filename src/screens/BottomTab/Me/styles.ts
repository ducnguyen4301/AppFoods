import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.white,
    padding: 5,
    borderWidth: 0.1,
    borderRadius: 2,
  },
  avatar: {
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: getSize.s(48) / 2,
    borderColor: Colors.white,
    borderWidth: getSize.s(2),
    backgroundColor: Colors.background,
  },
});
