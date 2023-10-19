import React from "react";
import { SCAlertTitle } from "../../styledComponents/feedback/SCAlertTitle";

export default function NativeAlert(props) {
  return <SCAlert {...props}>{props.children}</SCAlert>;
}
