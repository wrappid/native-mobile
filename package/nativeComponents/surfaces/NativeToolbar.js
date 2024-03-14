// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCToolbar } from "../../styledComponents/surfaces/SCToolbar";

export default function NativeToolbar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}
