import IconsAD from 'react-native-vector-icons/AntDesign';
import IconsEI from 'react-native-vector-icons/EvilIcons';
import IconsFT from 'react-native-vector-icons/Feather';
import IconsFA from 'react-native-vector-icons/FontAwesome';
import IconsFA5 from 'react-native-vector-icons/FontAwesome5';
import IconsFI from 'react-native-vector-icons/Fontisto';
import IconsIC from 'react-native-vector-icons/Ionicons';
import IconsMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsMI from 'react-native-vector-icons/MaterialIcons';
import IconsOI from 'react-native-vector-icons/Octicons';
import IconsEO from 'react-native-vector-icons/Entypo';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

export const CustomIcon = createIconSetFromIcoMoon(
  require('./selection.json'),
  'icomoon',
);
export {
  IconsAD,
  IconsEI,
  IconsFT,
  IconsFA,
  IconsFA5,
  IconsFI,
  IconsIC,
  IconsMCI,
  IconsMI,
  IconsOI,
  IconsEO,
};
