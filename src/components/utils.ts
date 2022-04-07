import {IconType} from '@assets/icons';
import {FlexStyle, ViewStyle} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {IconProps} from 'react-native-vector-icons/Icon';
import {BlockProps} from './Block/types';

export const handleGutter = (
  type: 'padding' | 'margin',
  gutter: number | GutterProps,
) => {
  if (isNumber(gutter)) {
    return {
      [type]: gutter,
    };
  }
  let padding: {[key: string]: number} = {};
  const gutterKeys = Object.keys(gutter) as Array<keyof GutterProps>;
  gutterKeys.forEach(key => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
    if (gutter[key] !== undefined) {
      padding[`${type}${capFirstLetter}`] = gutter[key] as number;
    }
  });
  return padding;
};

export const handleRadius = (radius: number | RadiusProps) => {
  if (isNumber(radius)) {
    return {
      borderRadius: radius,
    };
  }
  let borderRadius: {[key: string]: number} = {};
  const gutterKeys = Object.keys(radius) as Array<keyof RadiusProps>;
  gutterKeys.forEach(key => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
    if (radius[key] !== undefined) {
      borderRadius[`border${capFirstLetter}Radius`] = radius[key] as number;
    }
  });
  return borderRadius;
};

export const handleSquare = (number: number) => {
  return {
    width: number,
    height: number,
  };
};

export const handleRound = (number: number) => {
  return {
    width: number,
    height: number,
    borderRadius: number / 2,
  };
};

const getInitPadding = (
  inset: SafeAreaInsetType,
  padding?: number | GutterProps,
) => {
  let initPadding = 0;
  if (!padding) {
    return initPadding;
  }
  if (isNumber(padding)) {
    initPadding = padding;
  } else {
    initPadding = padding?.[inset] ?? 0;
    if (!initPadding) {
      const isVertical = inset === 'top' || inset === 'bottom';
      if (isVertical) {
        initPadding = padding.vertical ? padding.vertical : 0;
      } else {
        initPadding = padding.horizontal ? padding.horizontal : 0;
      }
    }
  }
  return initPadding;
};

export const handleInset = (
  props: BlockProps,
  safe: EdgeInsets,
  padding?: number | GutterProps,
) => {
  if (!props.inset) {
    return;
  }

  if (typeof props.inset === 'string') {
    const capitalize =
      props.inset.charAt(0).toUpperCase() + props.inset.slice(1);
    const initPadding = getInitPadding(props.inset, padding);
    return {
      [`padding${capitalize}`]: safe[props.inset] + initPadding,
    };
  }

  let paddingStyles: {[key: string]: number} = {};
  for (let i = 0; i < props.inset.length; i++) {
    const element = props.inset[i];
    const capitalize = element.charAt(0).toUpperCase() + element.slice(1);
    const initPadding = getInitPadding(element, padding);
    paddingStyles[`padding${capitalize}`] = safe[element] + initPadding;
  }
  return paddingStyles;
};

export const handleBorder = (border: BorderProps | BorderType) => {
  if ('width' in border) {
    return {borderWidth: border.width, borderColor: border.color};
  }

  const borderKeys = Object.keys(border) as Array<keyof BorderType>;
  let borderBox: {[key: string]: number | string | undefined} = {};
  borderKeys.forEach(key => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
    if (border[key] !== undefined) {
      borderBox[`border${capFirstLetter}Width`] = border[key]?.width as number;
      borderBox[`border${capFirstLetter}Color`] = border[key]?.color;
    }
  });
  return borderBox;
};

export const createDefaultStyle = (props: {[key: string]: any}) => [
  props.flex && {flex: isNumber(props.flex) ? props.flex : 1},
  props.flexGrow && {flexGrow: isNumber(props.flexGrow) ? props.flexGrow : 1},
  props.flexShrink && {
    flexShrink: isNumber(props.flexShrink) ? props.flexShrink : 1,
  },
  isNumber(props.square) && handleSquare(props.square),
  isNumber(props.round) && handleRound(props.round),
  props.radius && handleRadius(props.radius),
  props.borderStyle && {borderStyle: props.borderStyle},
  props.border && handleBorder(props.border),
  props.wrap && {flexWrap: 'wrap'},
  props.alignSelf && {alignSelf: props.alignSelf},
  isNumber(props.opacity) && {opacity: props.opacity},
];

export const isString = (x: any): x is string => typeof x === 'string';

export const isNumber = (x: any): x is number => typeof x === 'number';

export const isUndefined = (x: any): x is undefined => x === undefined;

export const isIcon = (
  icon: IconComponentProps | React.ReactNode,
): icon is IconComponentProps => {
  return (icon as IconComponentProps)?.name !== undefined;
};

export interface IconComponentProps extends IconProps {
  type: IconType;
}

export interface DefaultStyleProps {
  /**
   * Define how your items are going to **“fill”** over the available space along your main axis ([flex](https://reactnative.dev/docs/layout-props#flex))
   *
   * ```
   * flex="true" <=> {flex: 1}
   * ```
   * ```
   * flex=number <=> {flex: number}
   * ```
   */
  flex?: boolean | number;

  /**
   * Describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. ([flexShirnk](https://reactnative.dev/docs/layout-props#flexshrink))
   *
   * ```
   * flexShrink="true" <=> {flexShrink: 1}
   * ```
   * ```
   * flexShrink=number <=> {flexShrink: number}
   * ```
   */
  flexShrink?: boolean | number;

  /**
   * Describes how any space within a container should be distributed among its children along the main axis ([flexGrow](https://reactnative.dev/docs/layout-props#flexgrow))
   *
   * ```
   * flexGrow="true" <=> {flexGrow: 1}
   * ```
   * ```
   * flexGrow=number <=> {flexGrow: number}
   * ```
   */
  flexGrow?: boolean | number;

  /**
   * **padding** creates extra space within an component
   *
   * ```
    padding={16}
    //or
    padding={{horizontal: 16, top: 12}}
    ```
   */
  padding?: number | GutterProps;

  /**
   * **margin** creates extra space around an component
   *
   * ```
    margin={16}
    //or
    margin={{horizontal: 16, top: 12}}
    ```
   */
  margin?: number | GutterProps;

  /**
   * Make component to square with value
   */
  square?: number;

  /**
   * Make component to circular with value
   */
  round?: number;

  /**
   * **border** works like border-width in CSS
   */
  border?: BorderProps | BorderType;

  /**
   * Style of border
   */
  borderStyle?: ViewStyle['borderStyle'];

  /**
   * Specifies that the flexible items will wrap if necessary
   */
  wrap?: boolean;

  /**
   * Set an opacity value for component. The number should be in the range from **0.0** to **1.0**.
   */
  opacity?: number;

  /**
   * Rounded border
   */
  radius?: number | RadiusProps;

  alignSelf?: FlexStyle['alignSelf'];
}

export type BorderProps = {width: number; color: string};

export type GutterProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
};

export type RadiusProps = {
  bottomLeft?: number;
  bottomRight?: number;
  topLeft?: number;
  topRight?: number;
};

export type BorderType = {
  top?: BorderProps;
  left?: BorderProps;
  right?: BorderProps;
  bottom?: BorderProps;
};

export type SafeAreaInsetType = 'top' | 'bottom' | 'right' | 'left';
