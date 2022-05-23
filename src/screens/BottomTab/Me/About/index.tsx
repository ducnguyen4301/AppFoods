import {Linking, SafeAreaView} from 'react-native';
import React from 'react';
import {Block, HeaderTitle, Text} from '@components';
import styles from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {CustomIcon} from '@assets/icons';
import {MenuItem} from '@components/Me';
import localImages from '@assets';
import FastImage from 'react-native-fast-image';

const AboutScreen = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const openLinkingApp = () => {
    Linking.openSettings();
  };
  return (
    <SafeAreaView>
      <HeaderTitle
        title="Ve FoodCome"
        titleStyle={styles.headerTitle}
        showBorderBottom
      />
      <Block backgroundColor={Colors.white}>
        <Block
          margin={{vertical: 26, top: 20}}
          align="flex-end"
          row
          justify="center"
          backgroundColor={Colors.white}>
          <FastImage source={localImages().logo} style={styles.imageContain} />
          <Text color="orangeJuice" fontType="regular" size={18}>
            Food
          </Text>
          <Text color="orangeJuice" fontType="bold" size={20}>
            Come
          </Text>
        </Block>
        <Block
          margin={{horizontal: 15}}
          padding={{horizontal: 5}}
          backgroundColor={Colors.white}>
          <Text color="gray" size={14}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            dolore molestias, debitis aspernatur cumque provident neque ratione
            error quia dignissimos quo, quam voluptatum repellat consectetur,
            est explicabo suscipit iusto doloremque.
          </Text>
          <Block margin={{top: 20}}>
            <Block row>
              <CustomIcon name="flash" size={15} color={Colors.orangeJuice} />
              <Text>201/10 D.Le Van Viet, Quan 9, Thanh Pho Ho Chi Minh</Text>
            </Block>
            <Block row>
              <CustomIcon name="flash" size={15} color={Colors.orangeJuice} />
              <Text>mail@gmail.com</Text>
            </Block>
          </Block>
        </Block>
        <Block padding={5} justify="center" margin={{top: 20, bottom: 20}}>
          <FastImage source={localImages().logo} style={styles.image} />
        </Block>
      </Block>
      <Block height={10} />
      <Block backgroundColor={Colors.white}>
        <MenuItem
          title={t('Đánh giá ứng dụng FoodCome')}
          icon={{
            color: undefined,
            name: undefined,
            size: undefined,
          }}
          onPress={() => {
            openLinkingApp();
          }}
        />
      </Block>
    </SafeAreaView>
  );
};

export default AboutScreen;
