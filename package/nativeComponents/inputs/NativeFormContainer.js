// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/namespace
import { View } from "react-native";

export default function NativeFormContainer(props) {
  return <View {...props}>{props.children}</View>;
}
