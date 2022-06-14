import {Block, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const exampleData = [
  {
    title: 'Text',
    screenName: 'ExampleText',
  },
  {
    title: 'Button',
    screenName: 'ExampleButton',
  },
  {
    title: 'Icon',
    screenName: 'ExampleIcon',
  },
  {
    title: 'Input',
    screenName: 'ExampleInput',
  },
  {
    title: 'Radio',
    screenName: 'ExampleRadio',
  },
  {
    title: 'Modal',
    screenName: 'ExampleModal',
  },
  {
    title: 'Select',
    screenName: 'ExampleSelect',
  },
  {
    title: 'Toggle',
    screenName: 'ExampleSwitch',
  },
  {
    title: 'DateTimePicker',
    screenName: 'ExampleDateTimePicker',
  },
  {
    title: 'Image',
    screenName: 'ExampleImage',
  },
];

const ExampleScreen = () => {
  const _renderItem = useCallback(
    ({item}: any) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate(item.screenName)}>
        <Block padding={{horizontal: 16, vertical: 12}} backgroundColor="white">
          <Text fontType="bold" size={16}>
            {item.title}
          </Text>
        </Block>
      </TouchableOpacity>
    ),
    [],
  );

  const _keyExtractor = useCallback((item: any) => item.screenName, []);

  return (
    <FlatList
      style={styles.flex}
      data={exampleData}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      ItemSeparatorComponent={() => (
        <Block height={1} backgroundColor="background" />
      )}
    />
  );
};

export default ExampleScreen;

const styles = StyleSheet.create({
  flex: {flex: 1},
});
