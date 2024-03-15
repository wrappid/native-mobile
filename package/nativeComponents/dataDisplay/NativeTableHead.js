// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCTableHead } from "../../styledComponents/dataDisplay/SCTableHead";

export default function NativeTableHead(props) {
  return <SCTableHead {...props}>{props.children}</SCTableHead>;
}
