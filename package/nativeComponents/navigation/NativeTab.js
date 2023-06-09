import React from "react";
import { SCTab } from "../../styledComponents/navigation/SCTab";
import NativeTextButton from "../inputs/NativeTextButton";
import NativeContainedButton from "../inputs/NativeContainedButton";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeTab(props) {
  const { label, value, icon, disabled, onPress, currentTab } = props;
  return (
    <SCTab styleClasses={[UtilityClasses.MARGIN.MR2]}>
      {currentTab === value ? (
        <NativeContainedButton
          disabled={disabled}
          label={label}
          OnClick={() => {
            handleChange({}, value);
          }}
        />
      ) : (
        <NativeTextButton
          disabled={disabled}
          label={label}
          OnClick={() => {
            onPress({}, value);
          }}
        />
      )}
    </SCTab>
  );
}
