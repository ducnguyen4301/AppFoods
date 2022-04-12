import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {TextInputMaskProps} from 'react-native-text-input-mask';

export interface InputOTPProps extends TextInputMaskProps {
  /**
   * Styling for view containing label, input and error message
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * if **true**, text is not editable
   */
  disabled?: boolean;

  /**
   * Style of input when disabled
   */
  disabledInputStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for view containing input
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Style of input
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Specifies font weight.
   *
   * Default is **"regular"**
   */
  fontType?: 'regular' | 'bold';

  /**
   * Size of text
   *
   * Default is **14**
   */
  size?: number;

  /**
   * Label of input
   */
  label?: React.ReactNode;

  /**
   * Style of label if label is string
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * Add **"*"** after label if label is string
   */
  required?: boolean;

  /**
   * Error message
   */
  error?: React.ReactNode;

  /**
   * Style of error message if error is string
   */
  errorStyle?: StyleProp<TextStyle>;

  /**
   * Show error message
   */
  showError?: boolean;

  /**
   * Change input border color when focus
   */
  hideFocus?: boolean;

  ref?: any;

  maxLength?: number;
}
