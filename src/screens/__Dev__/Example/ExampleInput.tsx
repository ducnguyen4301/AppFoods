import React from 'react';
import {Text, Block, TextInput} from '@components';
import {ScrollView} from 'react-native';

const ExampleInput = () => {
  return (
    <Block flex backgroundColor="white">
      <ScrollView>
        <Block padding={16}>
          <Block margin={{bottom: 16}}>
            <TextInput label="Input Simple" placeholder="Place your Text" />
          </Block>
          <Block margin={{bottom: 16}}>
            <TextInput
              label="Input with error"
              required
              placeholder="Place your Text"
              leftIcon={{type: 'octicons', name: 'home'}}
              showError
              error="Field is required"
            />
          </Block>
          <Block margin={{bottom: 16}}>
            <TextInput
              label="Input with left icon"
              placeholder="Place your Text"
              leftIcon={{type: 'octicons', name: 'home'}}
            />
          </Block>
          <Block margin={{bottom: 16}}>
            <TextInput
              label="Input with right icon"
              placeholder="Place your Text"
              rightIcon={{type: 'octicons', name: 'home'}}
            />
          </Block>
          <Block margin={{bottom: 16}}>
            <TextInput
              label="Input password"
              placeholder="Place your Text"
              secureTextEntry
            />
          </Block>
          <Block margin={{bottom: 16}}>
            <Text size={16} fontType="bold">
              Input with mask (Credit card)
            </Text>
            <Text margin={{bottom: 12}} color="secondaryText">
              Mask: "[0000] [0000] [0000] [0000]"
            </Text>
            <TextInput
              placeholder="Place your Text"
              mask="[0000] [0000] [0000] [0000]"
            />
          </Block>
          <Block margin={{bottom: 16}}>
            <Text size={16} fontType="bold" margin={{bottom: 12}}>
              Multiline
            </Text>
            <TextInput
              placeholder="Place your Text"
              multiline
              numberOfLines={4}
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ExampleInput;
