// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeRouter } from "react-router-native";

export default function NativeNavigation(props) {
  const { children } = props;

  return <NativeRouter>{children}</NativeRouter>;
}
