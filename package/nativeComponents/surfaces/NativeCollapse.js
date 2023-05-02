import React from "react";

import { SCAccordion as SCCollapse } from "../../styledComponents/surfaces/SCAccordion";

export default function NativeCollapse(props) {
  return <SCCollapse {...props}>{props.children}</SCCollapse>;
}
