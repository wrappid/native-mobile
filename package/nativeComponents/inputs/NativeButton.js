import React from "react";
import { SCButton } from "../../styledComponents/inputs/SCButton";

export default function NativeButton(props) {
  const {
    label = "LABEL NOT PROVIDED",
    OnClick,
    variant,
    innerRef,
    type,
    size = "small",
    ...restProps
  } = props;

  const UserActionLogging = () => {
    // alert("BUTTON CLICK");
  };

  return (
    <SCButton
      type={type ? type : "button"}
      ref={innerRef}
      mode={variant ? variant : "contained"}
      size={size}
      onPress={(e) => {
        UserActionLogging();
        OnClick(e);
      }}
    >
      {label}
    </SCButton>
  );
}
