// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeTypography from "../dataDisplay/NativeTypography";

export default function NativeSpan(props) {
  return <NativeTypography {...props}>{props.children}</NativeTypography>;
}
