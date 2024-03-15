// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line import/namespace
import { Animated } from "react-native";
import { useTheme } from "react-native-paper";

const CIRCULAR = "circular";
const RECTANGULAR = "rectangular";
const TEXT = "text";
const ROUNDED = "rounded";

export default function NativeSkeleton(props) {
  const theme = useTheme();
  const fadeAnim = useRef(new Animated.Value(0.1)).current; // Initial value for opacity: 0

  const { height, width, variant } = props;

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
    // -- console.log("SKELETON", fadeAnim);
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          delay          : 100,
          duration       : 1000,
          toValue        : 1,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          duration       : 1000,
          toValue        : 0.1,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return variant === RECTANGULAR ? (
    <Animated.View // Special animatable View
      style={{
        backgroundColor: theme.colors.secondary,
        height         : height || 50,
        opacity        : fadeAnim,
        width          : width || "100%", // Bind opacity to animated value
      }}
    />
  ) : variant === ROUNDED ? (
    <Animated.View // Special animatable View
      style={{
        backgroundColor: theme.colors.secondary,
        borderRadius   : 10 || theme?.roundness,
        height         : height || 50,
        opacity        : fadeAnim,
        width          : width || "100%", // Bind opacity to animated value
      }}
    />
  ) : variant === CIRCULAR ? (
    <Animated.View // Special animatable View
      style={{
        backgroundColor: theme.colors.secondary,
        borderRadius   : radius / 2,
        height         : radius,
        opacity        : fadeAnim,
        width          : radius, // Bind opacity to animated value
      }}
    />
  ) : !variant || variant === TEXT ? (
    <Animated.View // Special animatable View
      style={{
        backgroundColor: theme.colors.secondary,
        height         : 10,
        opacity        : fadeAnim,
        width          : "100%", // Bind opacity to animated value
      }}
    />
  ) : null;
}
