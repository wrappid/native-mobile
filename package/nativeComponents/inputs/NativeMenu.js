// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeStack from "../layouts/NativeStack";

export default function NativeMenu(props) {
  return <NativeStack direction="column">{props.children}</NativeStack>;
}
