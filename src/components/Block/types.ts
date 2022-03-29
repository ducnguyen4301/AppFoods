import {FlexStyle, ViewProps, ViewStyle} from 'react-native';
import {DefaultStyleProps, SafeAreaInsetType} from '../utils';

export interface BlockProps extends DefaultStyleProps, ViewProps {
  /**
   * Width of the component
   */
  width?: number | string;

  /**
   * Height of the component
   */
  height?: number | string;

  /**
   * The flexible items are displayed horizontally, as a row
   */
  row?: boolean;

  /**
   * Background color of the component - (key of Colors (theme/colors.ts) or Color keywords)
   */
  backgroundColor?: string;

  /**
   * Describes how to align children along the cross axis of their container
   */
  align?: FlexStyle['alignItems'];

  /**
   * Describes how to align children within the main axis of their container
   */
  justify?: FlexStyle['justifyContent'];

  /**
   * Position in React Native is similar to regular CSS
   */
  position?: FlexStyle['position'];

  /**
   * **top** is the number of logical pixels to offset the top edge of this component.
   */
  top?: number | string;

  /**
   * **bottom** is the number of logical pixels to offset the top edge of this component.
   */
  bottom?: number | string;

  /**
   * **left** is the number of logical pixels to offset the top edge of this component.
   */
  left?: number | string;

  /**
   * **right** is the number of logical pixels to offset the top edge of this component.
   */
  right?: number | string;

  /**
   * Render content within the safe area boundaries of a device
   * Example:
   * ```
   * <Block
   *   inset="top"
   * />
   * ```
   * or
   * ```
   * <Block
   *   inset={["top", "bottom"]}
   * />
   * ```
   */
  inset?: SafeAreaInsetType | SafeAreaInsetType[];

  /**
   * Enable default shadow style of component
   * ```
   * {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    }
   * ```
   */
  shadow?: boolean;

  overflow?: ViewStyle['overflow'];

  ref?: any;
  children?: any;
}
