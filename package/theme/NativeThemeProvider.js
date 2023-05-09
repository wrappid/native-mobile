import { Provider, MD3LightTheme as DefaultTheme } from "react-native-paper";
import React from "react";

export default function NativeThemeProvider(props) {
  const [paperTheme, setPaperTheme] = React.useState({});

  const setPaperThemeObject = () => {
    console.log("%%%%%%%%%%%%%%%%%THEME%%%%%%%%%%%%%%%%%", props.theme);
    let transformedThemeObject = {
      ...DefaultTheme,
      roundness: props.theme.shape.borderRadius
        ? props.theme.shape.borderRadius / 4
        : 1,
      colors: {
        ...DefaultTheme.colors,
        primary: props.theme.palette.primary.main,
        onPrimary: props.theme.palette.primary.contrastText,
        primaryContainer: props.theme.palette.primary.light,
        onPrimaryContainer: props.theme.palette.primary.dark,
        secondary: props.theme.palette.secondary.main,
        onSecondary: props.theme.palette.secondary.contrastText,
        secondaryContainer: props.theme.palette.secondary.light,
        onSecondaryContainer: props.theme.palette.secondary.dark,
        background: props.theme.palette.background.default,
        onBackground: props.theme.palette.background.default,
        surface: props.theme.palette.background.default,
        surfaceVariant: props.theme.palette.background.default,
        // onSurface: props.theme.palette.background.default,
        error: props.theme.palette.error.main,
        onError: props.theme.palette.error.contrastText,
        errorContainer: props.theme.palette.error.light,
        onErrorContainer: props.theme.palette.error.dark,
        elevation: {
          ...DefaultTheme.colors.elevation,
          level1: props.theme.palette.background.default,
        },
      },
    };
    setPaperTheme(transformedThemeObject);
  };

  React.useEffect(() => {
    setPaperThemeObject();
  }, []);

  return <Provider theme={paperTheme}>{props.children}</Provider>;
}
