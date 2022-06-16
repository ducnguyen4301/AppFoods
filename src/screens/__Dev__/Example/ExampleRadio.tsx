import React, {useState} from 'react';
import {Text, Block, Radio, RadioGroup} from '@components';
import {StyleSheet} from 'react-native';

const ExampleRadio = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [selected, setSelected] = useState<string | number>(-1);

  return (
    <Block flex backgroundColor="white" padding={16}>
      <Text size={16} fontType="bold">
        Radio Simple
      </Text>
      <Radio
        containerStyle={styles.container}
        checked={isChecked}
        onChange={setIsChecked}>
        Radio Simple
      </Radio>
      <Radio
        containerStyle={styles.container}
        type="checkbox"
        color="blue"
        checked={isChecked2}
        onChange={setIsChecked2}>
        Checkbox Simple
      </Radio>
      <Radio containerStyle={styles.container} disabled>
        Radio disabled
      </Radio>
      <Radio
        checked={isChecked3}
        onChange={setIsChecked3}
        containerStyle={styles.container}
        position="right"
        radioIcon={{
          type: 'materialCommunityIcons',
          name: isChecked3 ? 'mail' : 'home',
          color: 'primary',
        }}>
        <Text flexGrow>Radio Custom</Text>
      </Radio>

      <Text size={16} fontType="bold" margin={{top: 12}}>
        Radio Group
      </Text>
      <Text fontType="bold">Selected Value: {selected}</Text>
      <RadioGroup selected={selected} onSelected={setSelected}>
        <Radio value={0} containerStyle={styles.container}>
          Option 1
        </Radio>
        <Radio value={2} containerStyle={styles.container}>
          Option 2
        </Radio>
        <Radio value="bcd" position="right" containerStyle={styles.container}>
          <Text margin={{right: 12}} flexGrow>
            Option 3
          </Text>
        </Radio>
      </RadioGroup>
    </Block>
  );
};

export default ExampleRadio;

const styles = StyleSheet.create({
  container: {paddingVertical: 12},
});
