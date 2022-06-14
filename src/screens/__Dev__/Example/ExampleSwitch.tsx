import React, {useState} from 'react';
import {Text, Block, Switch} from '@components';

const ExampleSwitch = () => {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <Block
      justify="center"
      align="center"
      padding={16}
      backgroundColor="white"
      flex>
      <Text fontType="bold" size={16}>
        Switch: {isToggle ? 'ON' : 'OFF'}
      </Text>
      <Block height={24} />
      <Switch value={isToggle} onValueChange={setIsToggle} />
      <Block height={24} />
      <Switch value={true} onValueChange={setIsToggle} disabled />
    </Block>
  );
};

export default ExampleSwitch;
