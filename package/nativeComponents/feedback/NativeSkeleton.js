import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {useTheme} from 'react-native-paper';

const CIRCULAR = 'circular';
const RECTANGULAR = 'rectangular';
const TEXT = 'text';
const ROUNDED = 'rounded';

export default function NativeSkeleton(props) {
  const theme = useTheme();
  const fadeAnim = useRef(new Animated.Value(0.1)).current; // Initial value for opacity: 0

  const {height, width, variant} = props;

  /**
   * for circular this supposed to be same
   */
  const radius =
    height && width
      ? (height + width) / 2
      : height && !width
      ? height
      : width && !height
      ? width
      : 30;

  useEffect(() => {
    console.log('SKELETON', fadeAnim);
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          delay: 100,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return variant === RECTANGULAR ? (
    <Animated.View // Special animatable View
      style={{
        width: width || '100%',
        height: height || 50,
        backgroundColor: theme.colors.secondary,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    />
  ) : variant === ROUNDED ? (
    <Animated.View // Special animatable View
      style={{
        borderRadius: 10 || theme?.roundness,
        width: width || '100%',
        height: height || 50,
        backgroundColor: theme.colors.secondary,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    />
  ) : variant === CIRCULAR ? (
    <Animated.View // Special animatable View
      style={{
        width: radius,
        height: radius,
        borderRadius: radius / 2,
        backgroundColor: theme.colors.secondary,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    />
  ) : !variant || variant === TEXT ? (
    <Animated.View // Special animatable View
      style={{
        width: '100%',
        height: 10,
        backgroundColor: theme.colors.secondary,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    />
  ) : null;
}
