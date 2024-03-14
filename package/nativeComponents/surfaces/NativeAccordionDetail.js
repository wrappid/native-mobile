// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCAccordionDetail } from "../../styledComponents/surfaces/SCAccordionDetail";

export default function NativeAccordionDetail(props) {
  return <SCAccordionDetail {...props}>{props.children}</SCAccordionDetail>;
}
