import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

export const CustomIcon = createIconSetFromIcoMoon(
  require('./selection.json'),
  'icomoon',
);

const Icons = {
  fontAwesome5: FontAwesome5,
  antDesign: AntDesign,
  feather: Feather,
  fontAwesome: FontAwesome,
  materialCommunityIcons: MaterialCommunityIcons,
  materialIcons: MaterialIcons,
  evilIcons: EvilIcons,
  fontisto: Fontisto,
  octicons: Octicons,
  ionicons: Ionicons,
  custom: CustomIcon,
};

export type IconType = keyof typeof Icons;

export const getIconComponent = (componentName: IconType) =>
  Icons[componentName];
