import React from "react";
import { SCBox } from "../../styledComponents/layouts/SCBox";
import NativeTypography from "../dataDisplay/NativeTypography";

export default function NativeSpan(props) {
  return (
    <NativeTypography {...props}>{props.children}</NativeTypography>
  );
}
