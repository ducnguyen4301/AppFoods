import {SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {CustomIcon} from '@assets/icons';
import {goBack} from 'navigation/NavigationServices';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const UpdateLocation = () => {
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
            <Text size={20}>{t('Sửa địa chỉ')}</Text>
          </Block>
        }
      />
    </SafeAreaView>
  );
};

export default UpdateLocation;
