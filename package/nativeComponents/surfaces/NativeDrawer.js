import React from "react";
import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";

export default function NativeDrawer(props) {
  return <SCDrawer {...props}>{props.children}</SCDrawer>;
}
