import {SafeAreaView} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle, Text} from '@components';
import {MenuUpdateProfile} from '@components/Me';
import {navigate} from 'navigation/NavigationServices';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@theme';

const UpdateEmail = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  return (
    <SafeAreaView>
      <HeaderTitle title={t('Email')} />
      <Block padding={{top: 15, bottom: 4, horizontal: 10}}>
        <Text size={12} color="secondaryText">
          {t(
            'Thêm email giúp bạn khôi phục mật khẩu dễ dàng hơn và nhận nhiều ưu đãi từ FoodCome',
          )}
        </Text>
      </Block>
      <Block height={10} />
      <MenuUpdateProfile title={t('Email')} type="email" />
      <Block padding={10}>
        <Button
          title={t('Gửi email xác thực')}
          onPress={() => navigate('')}
          disabled
          disabledBackground={Colors.whiteSmoke}
        />
      </Block>
    </SafeAreaView>
  );
};

export default UpdateEmail;
