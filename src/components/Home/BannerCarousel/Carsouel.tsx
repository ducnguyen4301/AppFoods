import React, {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import banners from '../../../data/banner';
import Slide from './Slide';
import Pagination from './Pagination';
import {Block} from '@components';
const {width} = Dimensions.get('screen');
export const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <Block>
      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={1}
        automaticallyAdjustsScrollIndicatorInsets
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}, //
        )}>
        {banners.map(slide => {
          return <Slide key={slide.id} imageUrl={slide.imageUrl} />;
        })}
      </Animated.ScrollView>
      <Pagination slides={banners} scrollX={scrollX} />
    </Block>
  );
};
