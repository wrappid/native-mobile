// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCAppBar } from "../../styledComponents/surfaces/SCAppBar";

export default function NativeAppBar(props) {
  return (
    <SCAppBar styleClasses={props.styleClasses || []}>
      {props.children}
    </SCAppBar>
  );
}
