/* eslint-disable react-native/no-inline-styles */
import {Block} from '@components';
import React from 'react';
import {Animated, Dimensions} from 'react-native';
import styles from './styles';

const {width} = Dimensions.get('screen');

type PaginationProps = {
  scrollX: any;
  slides: any;
};

const DOT_SIZE = 20;
const Pagination: React.FC<PaginationProps> = ({scrollX, slides}) => {
  const inputRange = [0, width, width * 2, width * 3, width * 4];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE * 2, -DOT_SIZE, 0, DOT_SIZE, DOT_SIZE * 2],
  });
  return (
    <Block style={styles.containerPaginate}>
      <Block style={styles.pagination}>
        <Animated.View
          style={[
            styles.paginationIndicator,
            {
              position: 'absolute',
              transform: [{translateX}],
            },
          ]}
        />
        {slides.map((item: {id: React.Key | null | undefined}) => {
          return (
            <Block key={item.id} style={styles.paginationDotContainer}>
              <Block style={styles.paginationDot} />
            </Block>
          );
        })}
      </Block>
    </Block>
  );
};
export default Pagination;
