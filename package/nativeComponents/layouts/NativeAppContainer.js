/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext, UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { StatusBar } from "react-native";

import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, rightDrawer, footer, coreClasses } = props;

  const { themes = {}, pageThemeID } = React.useContext(WrappidDataContext) || {};
  // const theme = Object.keys(themes).includes(pageThemeID);
  const theme = themes[pageThemeID] || {};

  return (
    <NativeBox
      styleClasses={[UtilityClasses?.HEIGHT?.H_100, UtilityClasses?.DISPLAY?.FLEX]}
    >
      <StatusBar barStyle="dark-content" backgroundColor={theme?.palette?.background?.default || "#ffffff"}/>

      {appBar()}

      {leftDrawer()}

      <NativeBox
        component="main"
        styleClasses={[coreClasses.LAYOUT.CONTENT_CONTAINER]}
      >

        {props.children}

        {footer()}
      </NativeBox>

      {rightDrawer()}
    </NativeBox>
  );
}
