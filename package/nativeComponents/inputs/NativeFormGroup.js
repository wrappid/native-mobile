// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCFormGroup } from "../../styledComponents/inputs/SCFormGroup";

export default function NativeFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
