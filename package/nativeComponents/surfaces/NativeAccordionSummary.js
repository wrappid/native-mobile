// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCAccordionSummery } from "../../styledComponents/surfaces/SCAccordionSummery";

export default function NativeAccordionSummary(props) {
  return <SCAccordionSummery {...props}>{props.children}</SCAccordionSummery>;
}
