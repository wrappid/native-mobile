// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeH from "./NativeH";

export default function NativeH5(props) {
  return (
    <NativeH {...props} __level="h5">
      {props.children}
    </NativeH>
  );
}
