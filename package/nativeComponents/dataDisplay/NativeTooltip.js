// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCTooltip } from "../../styledComponents/dataDisplay/SCTooltip";

export default function NativeTooltip(props) {
  const { children, ...restProps } = props;

  return <SCTooltip {...restProps}>{children}</SCTooltip>;
}
