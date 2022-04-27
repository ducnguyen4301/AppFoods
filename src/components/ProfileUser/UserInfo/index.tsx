import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AuthResponse} from '@store/types';
import RNPicker, {Options} from 'react-native-image-crop-picker';
import {Block, Text} from '@components';
import styles from './styles';
import localImages from '@assets';

interface UserProps {
  info: AuthResponse;
}
const options: Options = {
  mediaType: 'photo',
  width: 1000,
  height: 1000,
  cropperToolbarTitle: '',
  cropperCircleOverlay: true,
  cropperCancelText: 'Huỷ',
  cropperChooseText: 'Chọn',
  cropping: true,
};
const images = localImages();
const UserInfo: React.FC<UserProps> = ({info}) => {
  const onPressAvatar = () => {
    RNPicker.openCamera(options);
  };
  return (
    <Block padding={{vertical: 24, horizontal: 16}} row align="center">
      <TouchableOpacity activeOpacity={0.8} onPress={onPressAvatar}>
        <Image
          source={info?.avatarUrl ? {uri: info?.avatarUrl} : images.logo}
          style={styles.avatar}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Block margin={{left: 8}} flexGrow flexShrink>
        <Text color="white" size={16} fontType="bold">
          {info?.username}
        </Text>
        <Text margin={{top: 4}} color="white">
          {info.email}
        </Text>
      </Block>
    </Block>
  );
};

export default UserInfo;
