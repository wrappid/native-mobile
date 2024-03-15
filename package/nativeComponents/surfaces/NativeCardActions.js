// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCCardActions } from "../../styledComponents/surfaces/SCCardActions";

export default function NativeCardActions(props) {
  return <SCCardActions {...props}>{props.children}</SCCardActions>;
}
