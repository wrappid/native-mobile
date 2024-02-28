import React from "react";

import { Provider, MD3LightTheme as DefaultTheme } from "react-native-paper";

export default function NativeThemeProvider(props) {
  const [paperTheme, setPaperTheme] = React.useState({});

  const setPaperThemeObject = () => {
    let transformedThemeObject = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: props?.theme?.palette?.background?.default,
        elevation : {
          ...DefaultTheme?.colors?.elevation,
          level1: props?.theme?.palette?.background?.default,
        },
        error               : props?.theme?.palette?.error?.main,
        errorContainer      : props?.theme?.palette?.error?.light,
        onBackground        : props?.theme?.palette?.background?.default,
        onError             : props?.theme?.palette?.error?.contrastText,
        onErrorContainer    : props?.theme?.palette?.error?.dark,
        onPrimary           : props?.theme?.palette?.primary?.contrastText,
        onPrimaryContainer  : props?.theme?.palette?.primary?.dark,
        onSecondary         : props?.theme?.palette?.secondary?.contrastText,
        onSecondaryContainer: props?.theme?.palette?.secondary?.dark,
        onSurface           : props?.theme?.palette?.text?.primary,
        onSurfaceVariant    : props?.theme?.palette?.text?.primary,
        primary             : props?.theme?.palette?.primary?.main,
        primaryContainer    : props?.theme?.palette?.primary?.light,
        secondary           : props?.theme?.palette?.secondary?.main,
        secondaryContainer  : props?.theme?.palette?.secondary?.light,
        surface             : props?.theme?.palette?.background?.default,
        surfaceVariant      : "transparent?",
      },
      roundness: props?.theme?.shape?.borderRadius
        ? props.theme.shape.borderRadius / 4
        : 1,
    };

    setPaperTheme(transformedThemeObject);
  };

  React.useEffect(() => {
    setPaperThemeObject();
  }, []);

  return <Provider theme={paperTheme}>{props.children}</Provider>;
}
