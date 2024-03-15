// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/namespace
import { ScrollView, Dimensions } from "react-native";

import NativeBox from "./NativeBox";

export default function NativePageContainer(props) {
  const { coreClasses, uid } = props;
  /**
   * @todo scroll view is used in page container should be removed
   * when flatlist used but this is causing children in pages being
   * overlapped that's why created a bounding box with fixed height
   * in flat list for data table
   */
  // eslint-disable-next-line no-unused-vars
  const windowHeight = Dimensions.get("window").height;
  // eslint-disable-next-line no-unused-vars
  const DEFAULT_APP_BAR_HEIGHT = 64;

  return (
    <NativeBox
      // eslint-disable-next-line etc/no-commented-out-code
      // style={{
      //   height  : uid ? windowHeight - DEFAULT_APP_BAR_HEIGHT : windowHeight,
      //   height  : uid ? windowHeight - DEFAULT_APP_BAR_HEIGHT : "100%",
      //   position: uid ? "absolute" : "relative",
      // }}
      styleClasses={
        uid
          ? [coreClasses.LAYOUT.PAGE_CONTAINER]
          : [coreClasses.LAYOUT.LOGGED_OUT_PAGE_CONTAINER]
      }
    >
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {props.children}
      </ScrollView>
    </NativeBox>
  );
}
