import Block from '@components/base/Block';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

type ImageProps = {
  imageUrl: any;
};
const Slide: React.FC<ImageProps> = ({imageUrl}) => {
  return (
    <Block style={styles.container}>
      <Image style={styles.imageSlide} source={imageUrl} />
    </Block>
  );
};

export default Slide;
