import React from "react";
import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, coreClasses, uid } = props;
  return (
    <>
      {uid && appBar()}

      <NativeBox style={uid && { height: "80%" }}>
        {leftDrawer()}

        {props.children}
      </NativeBox>
    </>
  );
}
