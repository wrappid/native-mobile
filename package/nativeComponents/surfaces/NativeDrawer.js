import React from "react";
import { SCDrawer } from "../../navigation/SCDrawer";
import NativeBox from "../layouts/NativeBox";
import { ScrollView } from "react-native";

export default function NativeDrawer(props) {
  return (
    props.open && (
      <NativeBox
        style={{
          flex: 1,
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.5)",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1200,
        }}
      >
        <NativeBox
          style={{
            backgroundColor: "white",
            opacity: 1,
            width: "60%",
          }}
        >
          <ScrollView>{props.children}</ScrollView>
        </NativeBox>
      </NativeBox>
    )
  );
}
