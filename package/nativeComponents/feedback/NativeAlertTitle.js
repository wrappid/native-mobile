// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCAlert } from "../../styledComponents/feedback/SCAlert";

export default function NativeAlert(props) {
  return <SCAlert {...props}>{props.children}</SCAlert>;
}
