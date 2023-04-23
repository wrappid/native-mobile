import React from 'react';
import {theme as coreTheme} from '../theme/theme';
import {ThemeProvider as NativeThemeProvider} from 'react-native-paper';

const WEB_PLATFORM = 'web';
const APP_PLATFORM = 'web';

function nativeCreateTheme(data) {
  return data;
}

export function detectPlatform(document, navigator) {
  console.log('platform detection', document, navigator);
  if (typeof document !== 'undefined') {
    // I'm on the web!
    return WEB_PLATFORM;
  } else if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative'
  ) {
    // I'm in react-native
    return APP_PLATFORM;
  } else {
    // I'm in node js
    return null;
  }
}

let theme = null;

try {
  let p = '../../../../src/config.json';
  let config = require(p);
  if (config?.theme) {
    theme = nativeCreateTheme({...coreTheme, ...config?.theme});
  } else {
    console.warn('No custom theme provided in config.json');
    theme = nativeCreateTheme(coreTheme);
  }
} catch (err) {
  console.warn('No custom config provided');
  theme = nativeCreateTheme(coreTheme);
}

console.log('THEME', theme);

export default theme;

export {NativeThemeProvider, nativeCreateTheme};
