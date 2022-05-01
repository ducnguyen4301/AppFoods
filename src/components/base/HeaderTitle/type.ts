import {ViewStyle, TextStyle} from 'react-native';
import {IconType} from '@assets/icons';
import {Colors} from '@theme/color';

export interface IconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: keyof typeof Colors;
}

export interface HeaderProps {
  containerStyle?: ViewStyle | ViewStyle[];
  headerRight?: JSX.Element;
  headerRightContainerStyle?: ViewStyle | ViewStyle[];
  headerLeft?: JSX.Element;
  headerLeftContainerStyle?: ViewStyle | ViewStyle[];
  headerCenter?: JSX.Element;
  headerCenterContainerStyle?: ViewStyle | ViewStyle[];
  title?: string;
  headerLeftIcon?: IconProps;
  headerRightIcon?: IconProps;
  canGoBack?: boolean;
  headerRightTitleButton?: string;
  onHeaderRightPress?: () => void;
  onHeaderLeftPress?: () => void;
  headerRightButtonDisabled?: boolean;
  showBorderBottom?: boolean;
  titleStyle?: TextStyle;
  mode?: 'main';
  headerRightButtonStyle?: ViewStyle | ViewStyle[];
  showAnimatedLoading?: boolean;
  isLoading?: boolean;
  titleRightButtonStyle?: TextStyle | TextStyle[];
}
