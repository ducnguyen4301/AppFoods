import Block from '@components/base/Block';
import React, {forwardRef} from 'react';
import {
  InputAccessoryView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {IFormContainer} from './types';

const FormContainer: React.FC<IFormContainer> = forwardRef(
  (
    {
      children,
      nativeId,
      toolbar,
      customToolBar,
      toolBarStyleContainer,
      scrollViewProps,
      ...props
    },
    ref,
  ) => {
    const {bottom} = useSafeAreaInsets();
    const _renderToolBar = () => (
      <InputAccessoryView nativeID={nativeId}>{toolbar}</InputAccessoryView>
    );

    const _renderCustomToolBar = () => (
      <Block
        padding={{bottom}}
        backgroundColor="border"
        justify="center"
        style={toolBarStyleContainer}>
        {customToolBar}
      </Block>
    );

    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.select({ios: 'padding', android: 'height'})}
        {...props}>
        <ScrollView
          ref={ref as any}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          {...scrollViewProps}>
          {children}
        </ScrollView>
        {nativeId &&
          nativeId !== '' &&
          Platform.OS === 'ios' &&
          _renderToolBar()}
        {customToolBar && _renderCustomToolBar()}
      </KeyboardAvoidingView>
    );
  },
);

export default FormContainer;
