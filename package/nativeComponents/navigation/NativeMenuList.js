// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCMenuList } from "../../styledComponents/inputs/SCMenuList";

export default function NativeMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}
