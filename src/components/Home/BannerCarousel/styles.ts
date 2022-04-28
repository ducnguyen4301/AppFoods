import {Colors} from '@theme/color';
import {getSize} from '@utils/reponsive';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
const DOT_SIZE = 20;
export default StyleSheet.create({
  imageSlide: {
    resizeMode: 'cover',
    width: '100%',
    height: getSize.s(180),
    borderRadius: 10,
  },
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  containerPaginate: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: DOT_SIZE,
    zIndex: 100,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2.5,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
    backgroundColor: 'rgba(198, 198, 198, 0.5)',
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE * 0.5,
    height: DOT_SIZE * 0.5,
    zIndex: 101,
    borderRadius: DOT_SIZE * 0.25,
    backgroundColor: Colors.secondaryText,
  },
});
