import React from "react";
import { SCTabs } from "../../styledComponents/navigation/SCTabs";
import NativeBox from "../layouts/NativeBox";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeTabs(props) {
  return (
    <NativeBox styleClasses={[UtilityClasses.HEIGHT.H_25]}>
      <SCTabs>{props.children}</SCTabs>
    </NativeBox>
  );
}
