import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {MenuProfile} from '@components/Me';
import {goBack, navigate} from 'navigation/NavigationServices';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import {CustomIcon} from '@assets/icons';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const {Colors} = useTheme();
  const {t} = useTranslation();
  return (
    <Block padding={{top: top}}>
      <HeaderTitle
        headerLeft={
          <Block row align="center" justify="center">
            <Block padding={{right: 10}}>
              <TouchableOpacity onPress={() => goBack()}>
                <CustomIcon
                  name="chevron-left"
                  size={20}
                  color={Colors.orangeJuice}
                />
              </TouchableOpacity>
            </Block>
            <Text size={20}>{t('Thông tin người dùng')}</Text>
          </Block>
        }
      />
      <Block height={10} />
      <MenuProfile
        onPress={() => navigate('UpdateImage')}
        titleEnd="Đổi hình đại diện"
        isShowImage
      />
      <MenuProfile title="Tên đăng nhập" titleEnd="foodee_1fmkfm3" isArrow />
      <MenuProfile
        onPress={() => navigate('UpdatePhone')}
        title="Số điện thoại"
        titleEnd="*******803"
      />
      <Block height={10} />
      <MenuProfile
        onPress={() => navigate('UpdateUserName')}
        title="Tên"
        titleEnd="foodee_1fmkfm3"
      />
      <MenuProfile
        onPress={() => navigate('UpdateEmail')}
        title="Email"
        titleEnd="Nhập Email"
        isEmail
      />
      <MenuProfile
        onPress={() => navigate('')}
        title="Giới tính"
        titleEnd="Cập nhật ngay"
        isGender
      />
      <MenuProfile
        onPress={() => navigate('')}
        title="Ngày sinh"
        titleEnd="Cập nhật ngay"
        isDOB
      />
      <MenuProfile
        onPress={() => navigate('UpdateJob')}
        title="Nghề nghiệp"
        titleEnd="Cập nhật ngay"
        isJob
      />
    </Block>
  );
};

export default ProfileScreen;
