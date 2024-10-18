import React from "react";

// eslint-disable-next-line import/np-unresolved
import { WrappidDataContext } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { StatusBar } from "react-native";

import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, rightDrawer, footer, children } = props;
  const { themes = {}, pageThemeID } = React.useContext(WrappidDataContext);
  
  const theme = themes[pageThemeID] || {};
  const backgroundColor = theme.palette?.background?.default || "";

  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={backgroundColor}
      />

      {appBar && appBar()}

      <NativeBox style={{ 
        backgroundColor,
        height: "92%"
      }}>
        {leftDrawer && leftDrawer()}

        {children}

        {footer && footer()}

        {rightDrawer && rightDrawer()}
      </NativeBox>
    </>
  );
}