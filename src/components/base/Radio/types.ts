import {StyleProp, ViewStyle} from 'react-native';
import {IconComponentProps} from '../../utils';

export interface RadioProps {
  /**
   * Whether component is checked.
   *
   * **Use this prop when not use radio group**
   */
  checked?: boolean;

  /**
   * Called when radio should switch it's value.
   *
   * **Use this prop when not use RadioGroup component**
   */
  onChange?: (checked: boolean) => void;

  /**
   * Radio will be disabled when disabled is **true**
   *
   * **Use this prop when not use RadioGroup component**
   */
  disabled?: boolean;

  /**
   * Color for radio icon and label
   *
   * Use when icon is default and children is **string**
   */
  color?: string;

  /**
   * Value of radio item
   *
   * **Use this prop with RadioGroup**
   */
  value?: string | number;

  /**
   * Styling for view containing radio item
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Default: radio
   */
  type?: 'checkbox' | 'radio' | 'checkbox-circle';

  /**
   * Position of icon (default: left)
   */
  position?: 'left' | 'right';

  /**
   * Custom radio icon
   */
  radioIcon?: IconComponentProps | React.ReactNode;

  /**
   * Styling for view containing the radio icon
   */
  radioIconContainerStyle?: StyleProp<ViewStyle>;

  children?: React.ReactNode;

  /**
   * Radio icon size
   */
  radioIconSize?: number;

  contentContainerStyle?: StyleProp<ViewStyle>;
}

export interface RadioGroupProps {
  /**
   * Value of currently checked radio
   */
  selected: string | number;

  /**
   * Called when one of the radios is pressed.
   */
  onSelected?: (value: string | number) => void;

  /**
   * Styling for view containing
   */
  containerStyle?: StyleProp<ViewStyle>;

  children?: any;
}
