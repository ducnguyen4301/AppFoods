import React from 'react';
import {Block} from '@components';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {getSize} from '@utils/reponsive';
import {Colors} from '@theme/color';
import Text from '@components/base/Text';
import {navigate} from 'navigation/NavigationServices';
import {CustomIcon} from '@assets/icons';

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
        <CustomIcon name="search" size={15} />
        <Text flex color="veryLightPink" padding={{horizontal: 5, vertical: 8}}>
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
    alignContent: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.whiteSmoke,
    height: getSize.v(35),
    borderRadius: 2,
    paddingHorizontal: 5,
  },
});
