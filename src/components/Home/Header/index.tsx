import React from 'react';
import {Block} from '@components';
import {TouchableOpacity} from 'react-native';
import Text from '@components/base/Text';
import {navigate} from 'navigation/NavigationServices';
import {CustomIcon} from '@assets/icons';
import styles from './styles';

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
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
