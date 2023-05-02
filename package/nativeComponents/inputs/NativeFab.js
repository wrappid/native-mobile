import React from "react";
import { SCFab } from "../../styledComponents/inputs/SCFab";

export default function NativeFab(props) {
  return <SCFab icon={props?.children?.props?.icon} {...props} />;
}
