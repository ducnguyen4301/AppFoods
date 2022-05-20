import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerTitle: {
    fontWeight: '500',
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 23,
    marginTop: 20,
    marginBottom: 20,
  },
  imageContain: {
    width: getSize.s(30),
    height: getSize.s(30),
    marginHorizontal: 10,
  },
});
