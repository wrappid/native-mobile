import React from "react";
import NativeBox from "./NativeBox";
import { ScrollView } from "react-native";

export default function NativePageContainer(props) {
  const { coreClasses } = props;
  /**
   * @todo scroll view is used in page container should be removed
   * when flatlist used but this is causing children in pages being
   * overlapped that's why created a bounding box with fixed height
   * in flat list for data table
   */

  return (
    <NativeBox styleClasses={[coreClasses?.LAYOUT?.PAGE_CONTAINER]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {props.children}
      </ScrollView>
    </NativeBox>
  );
}
