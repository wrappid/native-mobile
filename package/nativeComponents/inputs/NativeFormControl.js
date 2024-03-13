// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCFormControl } from "../../styledComponents/inputs/SCFormControl";

export default function NativeFormControl(props) {
  return (
    <SCFormControl {...props} variant="standard">
      {props.children}
    </SCFormControl>
  );
}
