import {SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, Button, HeaderTitle, Text} from '@components';
import {MenuUpdateProfile} from '@components/Me';
import {goBack, navigate} from 'navigation/NavigationServices';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@theme';
import {CustomIcon} from '@assets/icons';

const UpdateEmail = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  return (
    <SafeAreaView>
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
            <Text size={20}>{t('Email')}</Text>
          </Block>
        }
      />
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
