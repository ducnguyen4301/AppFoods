import React from 'react';
import {Block, IconComponent} from '@components';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {getSize} from '@utils/reponsive';
import {Colors} from '@theme/color';
import Text from '@components/Text';
import {navigate} from 'navigation/NavigationServices';

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onTextChange: Function;
}

const Header: React.FC<SearchBarProps> = ({}) => {
  return (
    <Block style={styles.container}>
      <TouchableOpacity
        style={styles.search}
        onPress={() => navigate('SearchScreen')}>
        <IconComponent name="search" type="custom" />
        <Text flex color="veryLightPink" padding={{horizontal: 2, vertical: 5}}>
          Search Foods
        </Text>
      </TouchableOpacity>
    </Block>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: getSize.v(50),
    paddingHorizontal: 10,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.whiteSmoke,
    height: getSize.v(32),
    borderRadius: 2,
    paddingHorizontal: 5,
  },
});
