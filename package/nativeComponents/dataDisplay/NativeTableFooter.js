// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCTableFooter } from "../../styledComponents/dataDisplay/SCTableFooter";

export default function NativeTableFooter(props) {
  return <SCTableFooter {...props}>{props.children}</SCTableFooter>;
}
