import React, {useMemo} from 'react';
import '@i18n';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {CustomIcon} from '@assets/icons';
import {Colors} from '@theme/color';
import {Block, Text} from '@components';
import Header from '@components/Home/Header';
import Banner from '@components/Home/BannerCarousel/SlideShow';
import {FlatList, TouchableOpacity, View} from 'react-native';
import banners from 'data/banner';
const Home = () => {
  const {t} = useTranslation('Home');
  const isLoading = true;
  const _onRefresh = () => {
    if (isLoading) {
      return;
    }
  };
  const _onEndReached = () => {
    if (isLoading) {
      return;
    }
  };
  const _renderListHeader = useMemo(
    () => (
      <Block>
        <Block margin={{bottom: 12}}>
          <Banner />
        </Block>
        <Block
          row
          align="center"
          justify="center"
          padding={{top: 14, bottom: 12, horizontal: 16}}
          backgroundColor={Colors.white}>
          <Text size={14} fontType="bold">
            Bộ sưu tập
          </Text>
          <TouchableOpacity style={styles.viewAll}>
            <Block flex row align="center" justify="flex-end">
              <Text size={14} fontType="bold">
                Xem tất cả
              </Text>
              <CustomIcon name="chevron-right" />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    ),
    [],
  );
  const _renderFooter = useMemo(() => {
    if (isLoading) {
      return (
        <View>
          <Text>Footer</Text>
        </View>
      );
    }
  }, [isLoading]);
  return (
    <SafeAreaView>
      <Block row align="center" margin={{bottom: 10, top: 10, horizontal: 10}}>
        <Block row align="center">
          <Text size={13} color="secondaryText" style={styles.location}>
            {t('Giao hàng đến:')}
          </Text>
        </Block>
      </Block>
      <Block row align="center" margin={{horizontal: 10}}>
        <CustomIcon name="location" color={Colors.orangeJuice} size={15} />
        <Text
          size={13}
          margin={{left: 2, right: 2}}
          color="primaryText"
          style={styles.location}>
          {t('201/10 Đ.Lê Văn Việt, Hiệp Phú, Quận 9, Thành phố HCM')}
        </Text>
        <CustomIcon
          name="chevron-right"
          color={Colors.secondaryText}
          size={15}
        />
      </Block>
      <Block
        justify="space-around"
        align="center"
        margin={{horizontal: 10}}
        style={styles.header}>
        <Header />
      </Block>
      <FlatList
        refreshing={false}
        onRefresh={_onRefresh}
        onEndReachedThreshold={0.5}
        onEndReached={_onEndReached}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={_renderListHeader}
        data={banners}
        renderItem={undefined}
        numColumns={2}
        keyExtractor={item => item.id}
        ListFooterComponent={_renderFooter}
      />
    </SafeAreaView>
  );
};

export default Home;
