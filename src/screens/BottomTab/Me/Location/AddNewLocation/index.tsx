import {SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import {CustomIcon} from '@assets/icons';
import {goBack} from 'navigation/NavigationServices';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@theme';

const AddNewLocation = () => {
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
            <Text size={20}>{t('Thêm địa chỉ mới')}</Text>
          </Block>
        }
      />
    </SafeAreaView>
  );
};

export default AddNewLocation;
