import React from 'react';
import {Block, HeaderTitle} from '@components';
import {MenuProfile} from '@components/Me';
import {navigate} from 'navigation/NavigationServices';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Block padding={{top: top}}>
      <HeaderTitle
        title="Thông tin người dùng"
        titleStyle={styles.headerTile}
      />
      <Block height={10} />
      <MenuProfile
        onPress={() => navigate('UpdateImage')}
        titleEnd="Đổi hình đại diện"
        type={'image'}
      />
      <MenuProfile
        title="Tên đăng nhập"
        titleEnd="foodee_1fmkfm3"
        type="username"
      />
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
        type="email"
      />
      <MenuProfile
        onPress={() => navigate('')}
        title="Giới tính"
        titleEnd="Cập nhật ngay"
        type="gender"
      />
      <MenuProfile
        onPress={() => navigate('')}
        title="Ngày sinh"
        titleEnd="Cập nhật ngay"
        type="dob"
      />
      <MenuProfile
        onPress={() => navigate('UpdateJob')}
        title="Nghề nghiệp"
        titleEnd="Cập nhật ngay"
        type="job"
      />
    </Block>
  );
};

export default ProfileScreen;
