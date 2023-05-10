import React from "react";
import { SCIconButton } from "../../styledComponents/inputs/SCIconButton";
import NativeTooltip from "../dataDisplay/NativeTooltip";

export default function NativeIconButton(props) {
  const { title, titlePlacement = "bottom", size = 24, ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <SCIconButton
            mode="outlined"
            onPress={restProps.onClick}
            size={size}
            icon={(iconProps) => props.children}
          />
        </NativeTooltip>
      ) : (
        <SCIconButton
          mode="outlined"
          onPress={restProps.onClick}
          size={size}
          icon={(iconProps) => props.children}
        />
      )}
    </>
  );
}
