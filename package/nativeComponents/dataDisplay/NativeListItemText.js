// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCListItemText } from "../../styledComponents/dataDisplay/SCListItemText";

export default function NativeListItemText(props) {
  return <SCListItemText {...props}>{props.children}</SCListItemText>;
}
