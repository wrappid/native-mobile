// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCContainer } from "../../styledComponents/layouts/SCContainer";

export default function NativeContainer(props) {
  return <SCContainer {...props}>{props.children}</SCContainer>;
}
