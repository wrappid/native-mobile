import React from "react";
import NativeBox from "../layouts/NativeBox";

export default function NativeFormContainer(props) {
  return <NativeBox {...props}>{props.children}</NativeBox>;
}
