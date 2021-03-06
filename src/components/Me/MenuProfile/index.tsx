import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AuthResponse} from '@store/types';
import {Block, Text} from '@components';
import styles from './styles';
import localImages from '@assets';
import {CustomIcon} from '@assets/icons';
import {useTheme} from '@theme';

interface UserProps {
  info?: AuthResponse;
  title?: string;
  titleEnd?: String;
  isShowImage?: boolean;
  isArrow?: boolean;
  isGender?: boolean;
  isEmail?: boolean;
  isDOB?: boolean;
  isJob?: boolean;
  type?: 'gender' | 'email' | 'dob' | 'job';
  onPress?: () => void;
}

const images = localImages();
const MenuProfile: React.FC<UserProps> = ({
  info,
  title,
  isShowImage,
  isArrow,
  isGender,
  isEmail,
  isDOB,
  isJob,
  titleEnd,
  type,
  onPress,
}) => {
  const {Colors} = useTheme();
  return (
    <Block
      backgroundColor={Colors.white}
      border={{bottom: {width: 0.8, color: Colors.whiteSmoke}}}>
      <TouchableOpacity activeOpacity={0.5} {...{onPress}}>
        <Block align="center" row padding={{horizontal: 16, vertical: 12}}>
          {isShowImage ? (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
              <Image
                source={
                  info?.avatarUrl ? {uri: info?.avatarUrl} : images.default_user
                }
                style={styles.avatar}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ) : (
            <Text fontType="regular" size={14}>
              {title}
            </Text>
          )}

          <Block flex row justify="flex-end">
            <Block align="center" justify="center">
              {isShowImage ? (
                <Text color={Colors.orangeJuice}>{titleEnd}</Text>
              ) : isEmail || isGender || isDOB || isJob ? (
                <Text color={Colors.veryLightPink}>{titleEnd}</Text>
              ) : (
                <Text>{titleEnd}</Text>
              )}
            </Block>
            {isArrow ? (
              <Block square={25} align="center" justify="center" />
            ) : (
              <Block square={25} align="center" justify="center">
                <CustomIcon name="chevron-right" />
              </Block>
            )}
          </Block>
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

export default MenuProfile;
