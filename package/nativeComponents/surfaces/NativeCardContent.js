// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCCardContent } from "../../styledComponents/surfaces/SCCardContent";

export default function NativeCardContent(props) {
  return <SCCardContent {...props}>{props.children}</SCCardContent>;
}
