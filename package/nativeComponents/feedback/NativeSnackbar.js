// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCSnackbar } from "../../styledComponents/feedback/SCSnackbar";

export default function NativeSnackbar(props) {
  return <SCSnackbar {...props}>{props.children}</SCSnackbar>;
}
