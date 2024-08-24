// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/namespace
import { theme } from "@wrappid/styles";
import { StatusBar } from "react-native";

import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, rightDrawer, footer } = props;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.palette.background.default}/>

      {appBar()}

      <NativeBox style={{ backgroundColor: theme.palette.background.default, height: "92%" }}>
        {leftDrawer()}

        {props.children}

        {footer()}

        {rightDrawer()}
      </NativeBox>
    </>
  );
}
