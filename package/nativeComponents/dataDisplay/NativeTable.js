import React from "react";
import { SCTable } from "../../styledComponents/dataDisplay/SCTable";

export default function NativeTable(props) {
  return <SCTable {...props}>{props.children}</SCTable>;
}
