// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCCardActionArea } from "../../styledComponents/surfaces/SCCardActionArea";

export default function NativeCardActionArea(props) {
  return <SCCardActionArea {...props}>{props.children}</SCCardActionArea>;
}
