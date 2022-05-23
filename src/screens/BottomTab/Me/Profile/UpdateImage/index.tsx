import {SafeAreaView} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {useTranslation} from 'react-i18next';
import {MenuProfile} from '@components/Me';
import {useSelector} from 'react-redux';
import RNPicker, {Options} from 'react-native-image-crop-picker';
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
const onPressAvatar = () => {
  RNPicker.openCamera(options);
};
const UpdateImage = () => {
  const {t} = useTranslation();
  const {userInfo} = useSelector((state: any) => state.auth);
  return (
    <SafeAreaView>
      <HeaderTitle title="User Image" />
      <Block padding={{top: 15, bottom: 4, horizontal: 10}}>
        <Text size={12} color="secondaryText">
          {t('Ảnh đại diện')}
        </Text>
      </Block>
      <MenuProfile
        info={userInfo}
        titleEnd="Đổi hình đại diện"
        type="image"
        onPress={onPressAvatar}
      />
    </SafeAreaView>
  );
};

export default UpdateImage;
