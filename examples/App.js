/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SCTypography} from './src/package';
import {SCAvatar} from './src/package';
import {SCBadge} from './src/package';

function App() {
  return (
    <SafeAreaView>
      {/* <Text>asdasd</Text> */}
      <View>
        <SCTypography>iadiashdiash</SCTypography>
        <SCAvatar />
        <SCBadge>2</SCBadge>
      </View>
    </SafeAreaView>
  );
}

export default App;
