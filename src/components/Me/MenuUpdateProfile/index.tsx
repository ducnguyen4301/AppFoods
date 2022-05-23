import {TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block, Text} from '@components';

import styles from './styles';
import {AuthResponse} from '@store/types';

interface UpdateProfileProps {
  info?: AuthResponse;
  title: String;
  titleEnd?: String;
  type?: 'email' | 'username';
  onPress?: () => void;
}
const MenuUpdateProfile: React.FC<UpdateProfileProps> = ({
  title,
  titleEnd,
  info,
  type,
  onPress,
}) => {
  return (
    <Block>
      <Block
        row
        align="center"
        justify="center"
        padding={{top: 14, bottom: 12, horizontal: 10}}
        backgroundColor={'white'}>
        <Text size={14}>{title}</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Block flex row align="center" justify="flex-end">
            {type === 'email' || info?.email ? (
              <TextInput placeholder="Email">{titleEnd}</TextInput>
            ) : type === 'username' ? (
              <TextInput>{titleEnd}</TextInput>
            ) : (
              <Text>{titleEnd}</Text>
            )}
          </Block>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default MenuUpdateProfile;
