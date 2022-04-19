import React from 'react';
import {Block, Text} from '@components';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();
  return (
    <Block>
      <Text>{t('a')}</Text>
    </Block>
  );
};

export default Header;
