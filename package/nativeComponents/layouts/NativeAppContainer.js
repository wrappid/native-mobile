import React from "react";
import NativeBox from "./NativeBox";
import {useTheme} from "react-native-paper";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, coreClasses, uid } = props;
  const theme = useTheme()
  return (
    <>
      {uid && appBar()}

      <NativeBox style={uid? { height: "92%" }: {backgroundColor:theme.colors.background}}>
        {leftDrawer()}

        {props.children}
      </NativeBox>
    </>
  );
}
