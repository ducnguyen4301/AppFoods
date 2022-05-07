import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: getSize.v(50),
    alignContent: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.whiteSmoke,
    height: getSize.v(35),
    borderRadius: 2,
    paddingHorizontal: 5,
  },
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
