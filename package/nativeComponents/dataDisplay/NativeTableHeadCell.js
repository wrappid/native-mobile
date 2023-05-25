import React from "react";
import { SCTableHeadCell } from "../../styledComponents/dataDisplay/SCTableHeadCell";

export default function NativeTableHeadCell(props) {
  return <SCTableHeadCell {...props}>{props.children}</SCTableHeadCell>;
}
