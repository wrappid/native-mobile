// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCList } from "../../styledComponents/layouts//SCList";

export default function NativeList(props) {
  return <SCList {...props}>{props.children}</SCList>;
}
