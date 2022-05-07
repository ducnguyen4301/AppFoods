import React, {useMemo} from 'react';
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
        <Header />
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
