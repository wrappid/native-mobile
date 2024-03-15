// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeH from "./NativeH";

export default function NativeH3(props) {
  return (
    <NativeH {...props} __level="h3">
      {props.children}
    </NativeH>
  );
}
