import React from "react";
import { SCBadge } from "../../styledComponents/dataDisplay/SCBadge";

export default function NativeBadge(props) {
  const { badgeContent, ...restProps } = props;
  return <SCBadge {...props}>{badgeContent}</SCBadge>;
}
