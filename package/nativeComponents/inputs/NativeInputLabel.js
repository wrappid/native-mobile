// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCInputLabel } from "../../styledComponents/inputs/SCInputLabel";

export default function NativeInputLabel(props) {
  return <SCInputLabel {...props}>{props.children}</SCInputLabel>;
}
