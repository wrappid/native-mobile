import React from "react";
import { SCTooltip } from "../../styledComponents/dataDisplay/SCTooltip";

export default function NativeTooltip(props) {
  const {children, ...restProps} = props;

  return <SCTooltip props>{children}</SCTooltip>;
}
