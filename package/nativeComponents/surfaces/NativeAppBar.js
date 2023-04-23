import React from "react";
import NativeBox from "../layouts/NativeBox";
import NativeTypographyBody1 from '../dataDisplay/paragraph/NativeTypographyBody1'

export default function NativeAppBar(props) {
  return (
    <NativeBox>
      <NativeTypographyBody1>App Bar</NativeTypographyBody1>
      {props.children}
    </NativeBox>
  );
}
