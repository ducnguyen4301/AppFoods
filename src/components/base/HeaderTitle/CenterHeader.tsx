import React from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import {isString} from 'lodash';
import {Block, Text} from '@components';

interface CenterHeaderProps {
  content?: string | JSX.Element;
  containerStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle;
}

const CenterHeader: React.FC<CenterHeaderProps> = ({
  content,
  containerStyle,
  titleStyle,
}) => {
  const _renderContent = () => {
    if (isString(content)) {
      return (
        <Text
          lineHeight={36}
          numberOfLines={1}
          size={18}
          fontType="regular"
          style={titleStyle}>
          {content}
        </Text>
      );
    }
    return content;
  };

  if (content) {
    return (
      <Block
        top={0}
        left={0}
        right={0}
        bottom={0}
        align="center"
        justify="center"
        style={containerStyle}>
        {_renderContent()}
      </Block>
    );
  }
  return null;
};

export default CenterHeader;
