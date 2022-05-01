import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    display: 'flex',
    height: getSize.v(50),
    flexDirection: 'row',
  },
  location: {
    fontFamily: 'BR Firma Bold',
  },
  viewAll: {
    flex: 1,
    flexDirection: 'row',
  },
});
