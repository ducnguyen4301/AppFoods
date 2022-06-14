import {Block, Button, IconComponent, Switch, Text} from '@components';
import {goBack} from '@navigation/NavigationServices';
import {DevStackRoutes} from '@navigation/types';
import {NavigationProp} from '@react-navigation/native';
import {useTheme} from '@theme';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

interface DevMenuProps {
  navigation: NavigationProp<DevStackRoutes>;
}

const DevMenu = ({}: DevMenuProps) => {
  const {Colors} = useTheme();
  const {i18n} = useTranslation();

  const [isEng, setIsEng] = useState(i18n.language === 'en');
  return (
    <Block flex backgroundColor="white" inset="top">
      <Block
        row
        align="center"
        padding={{vertical: 12, horizontal: 16}}
        border={{bottom: {width: 1, color: Colors.paleGrey}}}>
        <Text fontType="bold" size={18} flexGrow>
          Developer
        </Text>
        <Button onPress={goBack} alignSelf="flex-end">
          <IconComponent name="close" type="materialCommunityIcons" size={24} />
        </Button>
      </Block>
      <Block
        row
        align="center"
        padding={{vertical: 12, horizontal: 16}}
        border={{bottom: {width: 1, color: Colors.paleGrey}}}>
        <Text flexGrow flexShrink>
          Change language to Vietnamese
        </Text>
        <Switch
          value={isEng}
          onValueChange={isEnglish => {
            setIsEng(isEnglish);
            i18n.changeLanguage(isEnglish ? 'en' : 'vi');
          }}
        />
      </Block>
    </Block>
  );
};

export default DevMenu;
