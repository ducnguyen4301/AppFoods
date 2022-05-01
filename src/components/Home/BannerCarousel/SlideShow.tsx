import {Block} from '@components';
import Text from '@components/base/Text';
import {getSize} from '@utils/reponsive';
import banners from 'data/banner';
import React, {useCallback, useMemo} from 'react';
import {FlatList, Image, TouchableOpacity, Linking} from 'react-native';
import Loading from './Loading';
import styles from './styles';

interface BannerProps {}

const ITEM_WIDTH = getSize.s(343);
const SEPARATOR_WIDTH = getSize.s(12);

const Banner: React.FC<BannerProps> = () => {
  const itemWidth = useMemo(() => ITEM_WIDTH + SEPARATOR_WIDTH, []);
  const isLoading = false;
  console.log(banners);
  const _renderSlide = useCallback(({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL('https://reactnative.dev/')}
        activeOpacity={0.8}
        style={styles.slideItem}>
        <Image
          source={require('../../../assets/images/flashsale.jpg')}
          style={styles.slideImg}
          resizeMode="cover"
        />
        <Text>{item.id}</Text>
      </TouchableOpacity>
    );
  }, []);
  return (
    <Block backgroundColor="white" margin={{bottom: 10}}>
      <Loading.Banner isLoading={isLoading}>
        <FlatList
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={banners}
          renderItem={_renderSlide}
          pagingEnabled
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          ItemSeparatorComponent={() => <Block margin={{right: 12}} />}
          getItemLayout={(_data, index) => ({
            length: itemWidth,
            offset: itemWidth * index,
            index,
          })}
          windowSize={1}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews={true}
          snapToInterval={itemWidth}
          decelerationRate="fast"
        />
      </Loading.Banner>
    </Block>
  );
};

export default React.memo(Banner);
