import {Alert, Dimensions, SafeAreaView, Text} from 'react-native';
import React from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {MenuItem} from '@components/ProfileUser';
import {Block, Button} from '@components';
import {useTheme} from '@theme';
import {getSize} from '@utils/reponsive';
import {CustomIcon} from '@assets/icons';
import styles from './styles';
const {width} = Dimensions.get('screen');
const Me = () => {
  const {Colors} = useTheme();
  const {t} = useTranslation('Me');
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Block style={styles.bodyContainer}>
        <Block style={styles.userContainer}>
          <Block style={styles.avatarContainer}>
            <CustomIcon name="user-o" size={26} color={Colors.whiteSmoke} />
          </Block>
          <Block style={styles.textContainer}>
            <Text style={styles.welcomeText}>
              Chào mừng bạn đến với FoodCome
            </Text>
            <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
          </Block>
          <CustomIcon name="chevron-right" size={26} color={Colors.orange} />
        </Block>
        {/*  */}
        <MenuItem
          title={t('Ví Voucher')}
          icon={{
            color: Colors.orangeJuice,
            name: 'confirmation',
            size: getSize.s(22),
          }}
        />
        <MenuItem
          title={t('FoodCome Xu')}
          icon={{
            color: Colors.yellow,
            name: 'payment',
            size: getSize.s(22),
          }}
        />
        <MenuItem
          title={t('Thanh toán')}
          icon={{
            color: Colors.orangeJuice,
            name: 'payment',
            size: getSize.s(22),
          }}
        />
        <MenuItem
          title={t('Địa chỉ')}
          icon={{
            color: Colors.green,
            name: 'location-o',
            size: getSize.s(22),
          }}
        />
        <Block height={10} backgroundColor="blueSmoke" />
        <MenuItem
          title={t('Mời bạn bè')}
          icon={{
            color: Colors.waveBlue,
            name: 'yell',
            size: getSize.s(22),
          }}
        />
        <MenuItem
          title={t('Trung tâm trợ giúp')}
          icon={{
            color: Colors.green,
            name: 'questioncircleo',
            size: getSize.s(22),
            type: 'antDesign',
          }}
        />
        <Block height={10} backgroundColor="blueSmoke" />
        <MenuItem
          title={t('Ứng dụng cho chủ quán')}
          icon={{
            color: Colors.orangeJuice,
            name: 'home',
            size: getSize.s(22),
          }}
        />
        <Block height={10} backgroundColor="blueSmoke" />
        <MenuItem
          title={t('Chính sách quy định')}
          icon={{
            color: Colors.green,
            name: 'policy',
            size: getSize.s(22),
          }}
        />

        <MenuItem
          title={t('Cài đặt')}
          icon={{
            color: Colors.waveBlue,
            name: 'setting',
            size: getSize.s(22),
          }}
        />
        <MenuItem
          title={t('Về FoodCome')}
          icon={{
            color: Colors.orangeJuice,
            name: 'home',
            size: getSize.s(22),
          }}
        />
        <Block height={getSize.v(width)} backgroundColor="blueSmoke">
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
                      text: 'Xác nhận',
                      onPress: () => {},
                    },
                  ],
                );
              }}
            />
          </Block>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default Me;
