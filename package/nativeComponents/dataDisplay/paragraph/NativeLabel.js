import React from "react";
import { variantMap } from "../../../helper/componentUtil";
import { SCTypography } from "../../../styledComponents/dataDisplay/SCTypography";

export default function NativeLabel(props) {
  return <SCTypography {...props} variant={variantMap.caption} />;
}
