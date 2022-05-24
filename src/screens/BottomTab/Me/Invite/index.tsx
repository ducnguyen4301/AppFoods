import {Linking, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {CustomIcon} from '@assets/icons';
import {goBack} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {MenuItem} from '@components/Me';
import qs from 'qs';
const Invite = () => {
  const {Colors} = useTheme();
  const {t} = useTranslation();
  const sendEmail = async (
    to?: string,
    subject?: string,
    body?: string,
    options = {},
  ) => {
    const {cc, bcc}: any = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc,
    });

    if (query.length) {
      url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
  };
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
            <Text size={20}>{t('Mời bạn bè')}</Text>
          </Block>
        }
      />
      <Block height={10} />
      <Block backgroundColor="white">
        <MenuItem
          title={'Gửi SMS'}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
        />
        <MenuItem
          title={'Gửi Email'}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
          onPress={() =>
            sendEmail(
              '',
              'Ứng dụng FoodCome',
              'Sử dụng để được giảm giác cho đơn đặt hàng đầu tiên của bạn trên ứng dụng FoodCome [link]',
            ).then(() => {
              console.log('sent successfully !');
            })
          }
        />
        <MenuItem
          title={'Copy link tải app'}
          icon={{
            color: undefined,
            size: undefined,
            name: undefined,
            type: undefined,
          }}
        />
      </Block>
    </SafeAreaView>
  );
};

export default Invite;
