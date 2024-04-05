// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/namespace
import { StatusBar } from "react-native";
import { useTheme } from "react-native-paper";

import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, rightDrawer, footer } = props;
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.palette.primary.main}
        barStyle="light-content"
      />

      {appBar()}

      <NativeBox style={{ backgroundColor: theme.palette.primary.main, height: "92%" }}>
        {leftDrawer()}

        {props.children}

        {footer()}

        {rightDrawer()}
      </NativeBox>
    </>
  );
}
