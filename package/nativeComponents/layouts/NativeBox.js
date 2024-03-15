// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCBox } from "../../styledComponents/layouts/SCBox";

export default function NativeBox(props) {
  return <SCBox {...props}>{props.children}</SCBox>;
}
