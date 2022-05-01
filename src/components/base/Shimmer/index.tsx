import React, {Children, useEffect, useMemo} from 'react';
import {Animated, Dimensions, Easing, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Block from '../Block';
import styles from './styles';
import {ShimmerLoadingProps} from './types';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Shimmer = ({
  children,
  speed = 800,
  backgroundColor = '#E1E9EE',
  highlightColor = '#F2F8FC',
  commonStyles,
}: ShimmerLoadingProps): JSX.Element => {
  const animatedValue = useMemo(() => new Animated.Value(0), []);
  const translateX = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
      }),
    [animatedValue],
  );

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: speed,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [animatedValue, speed]);

  const _getChildren = (elm: JSX.Element | JSX.Element[]) => {
    return Children.map(
      elm,
      (child: JSX.Element | undefined | null, index: number) => {
        if (!child) {
          return;
        }
        if (child.props.children) {
          return (
            <Block key={index} {...commonStyles} {...child.props}>
              {_getChildren(child.props.children)}
            </Block>
          );
        }

        return (
          <Block
            overflow="hidden"
            {...commonStyles}
            {...child.props}
            {...{backgroundColor}}>
            <Animated.View
              style={[StyleSheet.absoluteFill, {transform: [{translateX}]}]}>
              <LinearGradient
                colors={
                  [backgroundColor, highlightColor, backgroundColor] as string[]
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.flex}
              />
            </Animated.View>
          </Block>
        );
      },
    );
  };

  return <React.Fragment>{_getChildren(children)}</React.Fragment>;
};

export default Shimmer;
