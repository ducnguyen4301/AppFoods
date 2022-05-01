import {Block, Shimmer} from '@components';
import React from 'react';
import {Dimensions} from 'react-native';

interface LoadingProps {
  isLoading: boolean;
  children?: JSX.Element | JSX.Element[];
}

const commonStyles = {radius: 10};
const {width, height} = Dimensions.get('screen');
const Banner: React.FC<LoadingProps> = ({isLoading, children}) => {
  if (isLoading) {
    return (
      <Block>
        <Shimmer {...{commonStyles}}>
          <Block width={width} height={height / 5.5} />
        </Shimmer>
      </Block>
    );
  }

  return <>{children}</>;
};

const Loading = {Banner};

export default Loading;
