import React from 'react';
import NativeBox from './NativeBox';
import {StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function NativeAppContainer(props) {
  const {appBar, leftDrawer, footer, uid, coreClasses} = props;
  const theme = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={
          !uid ? theme?.colors?.onPrimaryContainer : theme?.colors?.onPrimary
        }
        barStyle="light-content"
      />
      {uid && appBar()}

      <NativeBox
        style={
          uid
            ? {height: '92%', backgroundColor: theme?.colors?.background}
            : {backgroundColor: theme?.colors?.onPrimaryContainer}
        }>
        {leftDrawer()}

        {props.children}
      </NativeBox>
    </>
  );
}
