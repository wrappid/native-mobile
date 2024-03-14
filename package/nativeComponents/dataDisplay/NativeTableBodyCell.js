// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeTableCell from "./NativeTableCell";

export default function NativeTableBodyCell(props) {
  return <NativeTableCell {...props}>{props.children}</NativeTableCell>;
}
