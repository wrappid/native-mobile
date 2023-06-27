import React from "react";
import NativeBox from "./NativeBox";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, coreClasses } = props;
  return (
    <NativeBox styleClasses={[UtilityClasses.DISPLAY.FLEX]}>
      {appBar()}

      <NativeBox
        component="main"
        styleClasses={[coreClasses?.LAYOUT?.LOGGED_OUT_CONTENT_CONTAINER]}
      >
        {leftDrawer()}

        {props.children}
      </NativeBox>
    </NativeBox>
  );
}
