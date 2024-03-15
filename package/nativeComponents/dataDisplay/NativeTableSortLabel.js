// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCTableSortLabel } from "../../styledComponents/dataDisplay/SCTableSortLabel";

export default function NativeTableSortLabel(props) {
  return <SCTableSortLabel {...props}>{props.children}</SCTableSortLabel>;
}
