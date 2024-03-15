// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeH from "./NativeH";

export default function NativeH1(props) {
  return (
    <NativeH {...props} __level="h1">
      {props.children}
    </NativeH>
  );
}
