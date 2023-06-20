import React from "react";
import { SCTab } from "../../styledComponents/navigation/SCTab";
import NativeTextButton from "../inputs/NativeTextButton";
import NativeContainedButton from "../inputs/NativeContainedButton";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeTab(props) {
  const {
    label,
    value,
    icon,
    disabled,
    onPress,
    currentTab,
    tabIndex,
    tabRef,
  } = props;

  const onTabChange = () => {
    console.log("TAB REF", tabRef, tabIndex);
    tabRef?.current?.scrollToIndex({
      index: tabIndex,
      animated: true,
      viewPosition: 0.2,
    });
    onPress({}, value);
  };

  return (
    <SCTab styleClasses={[UtilityClasses.MARGIN.MR2]}>
      {currentTab === value ? (
        <NativeContainedButton
          disabled={disabled}
          label={label}
          OnClick={onTabChange}
        />
      ) : (
        <NativeTextButton
          disabled={disabled}
          label={label}
          OnClick={onTabChange}
        />
      )}
    </SCTab>
  );
}
