import React from 'react';
import {Block, IconComponent} from '@components';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TextInput} from 'react-native';
import {getSize} from '@utils/reponsive';

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onTextChange: Function;
}

const Header: React.FC<SearchBarProps> = ({
  onEndEditing,
  didTouch,
  autoFocus = false,
  onTextChange,
}) => {
  const {t} = useTranslation();
  return (
    <Block style={styles.container}>
      <Block style={styles.searchBar}>
        <IconComponent name="search" type="custom" />
        <TextInput
          style={{
            marginLeft: 5,
            flex: 9,
            display: 'flex',
            fontSize: 20,
            height: 42,
          }}
          placeholder={t('Search Foods')}
          autoFocus={autoFocus}
          onTouchStart={didTouch}
          onChangeText={(text: any) => onTextChange(text)}
          onEndEditing={onEndEditing}
        />
      </Block>
    </Block>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: getSize.v(38),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    height: getSize.v(38),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
