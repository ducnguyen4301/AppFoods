import {BlockProps} from '../Block/types';

export interface ShimmerLoadingProps {
  children: JSX.Element | JSX.Element[];
  backgroundColor?: string;
  highlightColor?: string;
  speed?: number;
  commonStyles?: BlockProps;
}
