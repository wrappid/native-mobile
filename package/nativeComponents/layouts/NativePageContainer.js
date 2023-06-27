import React from "react";
import NativeBox from "./NativeBox";

export default function NativePageContainer(props) {
  return <NativeBox>{props.children}</NativeBox>;
}
