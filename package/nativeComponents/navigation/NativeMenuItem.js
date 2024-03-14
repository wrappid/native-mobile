// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCMenuItem } from "../../styledComponents/inputs/SCMenuItem";

export default function NativeMenuItem(props) {
  return <SCMenuItem {...props}>{props.children}</SCMenuItem>;
}
