// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { StatusBar } from "react-native";

import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, rightDrawer, footer } = props;

  const { themes = {}, pageThemeID } = React.useContext(WrappidDataContext);
  const theme = Object.keys(themes).includes(pageThemeID);

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
