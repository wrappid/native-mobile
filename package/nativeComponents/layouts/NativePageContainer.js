import React from "react";
import NativeBox from "./NativeBox";
import { ScrollView } from "react-native";

export default function NativePageContainer(props) {
  const { coreClasses, route } = props;
  return (
    <NativeBox styleClasses={[coreClasses?.LAYOUT?.PAGE_CONTAINER]}>
      {route?.Page?.noScroll ? (
        props.children
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {props.children}
        </ScrollView>
      )}
    </NativeBox>
  );
}
