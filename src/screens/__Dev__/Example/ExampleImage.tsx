import {Block, Image} from '@components';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';

const IMAGE_SIZE = Dimensions.get('window').width / 4;

const getImageUrl = (id: string, width: number, height: number) =>
  `https://unsplash.it/${Math.round(width)}/${Math.round(height)}?image=${id}`;

const ExampleImage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    axios.get('https://unsplash.it/list').then(res => setImageData(res.data));
  }, []);

  const _renderItem = useCallback(({item}: any) => {
    const uri = getImageUrl(item.id, IMAGE_SIZE, IMAGE_SIZE);
    return <Image source={{uri}} square={IMAGE_SIZE} />;
  }, []);

  const _keyExtractor = useCallback((item: any) => item.id, []);

  const _getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: IMAGE_SIZE,
      offset: IMAGE_SIZE * index,
      index,
    }),
    [],
  );

  return (
    <Block flex backgroundColor="white">
      <FlatList
        style={styles.list}
        data={imageData}
        renderItem={_renderItem}
        numColumns={4}
        keyExtractor={_keyExtractor}
        getItemLayout={_getItemLayout}
      />
    </Block>
  );
};

export default ExampleImage;
const styles = StyleSheet.create({
  list: {flex: 1},
});
