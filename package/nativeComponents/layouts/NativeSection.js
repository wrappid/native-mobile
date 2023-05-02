import React from "react";
import { SCSection } from "../../styledComponents/layouts/SCSection";

export default function NativeSection(props) {
  return <SCSection {...props}>{props.children}</SCSection>;
}
