import React from 'react';
import {MenuItem} from '@components/Me';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import {Block, Button, HeaderTitle} from '@components';
import {navigate} from 'navigation/NavigationServices';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Location = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const {top, bottom} = useSafeAreaInsets();
  return (
    <Block style={[styles.container, {paddingTop: top}]}>
      <HeaderTitle title={t('Địa chỉ')} />
      <Block flex backgroundColor={Colors.gray}>
        <Block backgroundColor={Colors.white}>
          <MenuItem
            title={t('Thêm địa chỉ Nhà')}
            icon={{
              color: Colors.primaryText,
              name: 'home-outline',
              size: getSize.s(18),
              type: 'ionicons',
            }}
            onPress={() => navigate('AddNewLocation')}
          />
          <MenuItem
            title={t('Thêm địa chỉ Công ty')}
            icon={{
              color: Colors.primaryText,
              name: 'bookmark-outline',
              size: getSize.s(18),
              type: 'materialIcons',
            }}
            onPress={() => navigate('AddNewLocation')}
          />
          <MenuItem
            title={t('201/10 Đ.Lê Văn Việt')}
            icon={{
              color: Colors.primaryText,
              name: 'bookmark-outline',
              size: getSize.s(18),
              type: 'materialIcons',
            }}
            onPress={() => navigate('AddNewLocation')}
            locationType="bookmark"
          />
        </Block>
      </Block>
      <Block
        padding={10}
        backgroundColor={Colors.white}
        margin={{bottom: bottom}}
        border={{top: {color: Colors.border, width: 0.5}}}>
        <Button
          title={t('Thêm địa chỉ mới')}
          onPress={() => navigate('AddNewLocation')}
        />
      </Block>
    </Block>
  );
};

export default Location;
