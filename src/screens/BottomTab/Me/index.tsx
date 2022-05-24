import {
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {MenuItem} from '@components/Me';
import {Block, Button, Text} from '@components';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from 'navigation/NavigationServices';
import localImages from '@assets';
const {width} = Dimensions.get('screen');
const Me = () => {
  const BASE_VERSIONAPP = '1.0.0';
  const {top} = useSafeAreaInsets();
  const {Colors} = useTheme();
  const {t} = useTranslation('Me');
  return (
    <ScrollView bounces={false}>
      <Block>
        <Block
          padding={{top: top, horizontal: 10, vertical: 2}}
          align="center"
          row
          backgroundColor={Colors.orangeJuice}>
          <Block padding={{vertical: 24, horizontal: 16}} row align="center">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate('Profile')}>
              <Image
                source={localImages().default_user}
                style={styles.avatar}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </Block>
          <Block flex row align="center" justify="flex-end">
            <Block>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => navigate('LoginPhone')}>
                <Text color={Colors.orangeJuice}>Đăng nhập/Đăng ký</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>

        {/*  */}
        <MenuItem
          title={t('Ví Voucher')}
          icon={{
            color: Colors.orangeJuice,
            name: 'confirmation',
            size: getSize.s(22),
          }}
          onPress={() => navigate('Voucher')}
        />
        <MenuItem
          title={t('FoodCome Xu')}
          icon={{
            color: Colors.yellow,
            name: 'payment',
            size: getSize.s(22),
          }}
          onPress={() => navigate('')}
        />
        <MenuItem
          title={t('Thanh toán')}
          icon={{
            color: Colors.orangeJuice,
            name: 'payment',
            size: getSize.s(22),
          }}
          onPress={() => navigate('')}
        />
        <MenuItem
          title={t('Địa chỉ')}
          icon={{
            color: Colors.green,
            name: 'location-o',
            size: getSize.s(22),
          }}
          onPress={() => navigate('Location')}
        />
        <Block height={10} backgroundColor="blueSmoke" />
        <MenuItem
          title={t('Mời bạn bè')}
          icon={{
            color: Colors.waveBlue,
            name: 'yell',
            size: getSize.s(22),
          }}
          onPress={() => navigate('Invite')}
        />
        <MenuItem
          title={t('Trung tâm trợ giúp')}
          icon={{
            color: Colors.green,
            name: 'questioncircleo',
            size: getSize.s(22),
            type: 'antDesign',
          }}
          onPress={() => navigate('')}
        />
        <Block height={10} backgroundColor="blueSmoke" />
        <MenuItem
          title={t('Ứng dụng cho chủ quán')}
          icon={{
            color: Colors.orangeJuice,
            name: 'home',
            size: getSize.s(22),
          }}
          onPress={() => navigate('')}
        />
        <Block height={10} backgroundColor="blueSmoke" />
        <MenuItem
          title={t('Chính sách quy định')}
          icon={{
            color: Colors.green,
            name: 'policy',
            size: getSize.s(22),
          }}
          onPress={() => navigate('')}
        />

        <MenuItem
          title={t('Cài đặt')}
          icon={{
            color: Colors.waveBlue,
            name: 'setting',
            size: getSize.s(22),
          }}
          onPress={() => navigate('Settings')}
        />
        <MenuItem
          title={t('Về FoodCome')}
          icon={{
            color: Colors.orangeJuice,
            name: 'home',
            size: getSize.s(22),
          }}
          onPress={() => navigate('AboutScreen')}
        />
        <Block height={getSize.v(width / 2.8)} backgroundColor="blueSmoke">
          <Block margin={{horizontal: 16, vertical: 20}}>
            <Button
              title="Đăng xuất"
              onPress={() => {
                Alert.alert(
                  'Đăng xuất',
                  'Bạn đã chắc chắn muốn đăng xuất chưa?',
                  [
                    {text: 'Huỷ'},
                    {
                      text: 'OK',
                      onPress: () => {},
                    },
                  ],
                );
              }}
            />
          </Block>
          <Block justify="center" align="center" row>
            <Text color={Colors.secondaryText} padding={5}>
              {t('Phiên bản')}
            </Text>
            <Text color={Colors.secondaryText}>{BASE_VERSIONAPP}</Text>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default Me;
