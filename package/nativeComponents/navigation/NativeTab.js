import React from "react";
import { SCTab } from "../../styledComponents/navigation/SCTab";

export default function NativeTab(props) {
  const { label, icon, disabled } = props;
  return (
    <SCTab label={label} icon={icon} disabled={disabled}>
      {props.children}
    </SCTab>
  );
}
