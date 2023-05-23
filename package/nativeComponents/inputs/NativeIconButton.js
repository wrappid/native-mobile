import React from "react";
import { SCIconButton } from "../../styledComponents/inputs/SCIconButton";
import { DEFAULT_ICON_SIZE, sizeMap } from "../dataDisplay/NativeIcon";

export default function NativeIconButton(props) {
  const { title, titlePlacement = "bottom", size, mode, ...restProps } = props;
  return (
    <SCIconButton
      mode={mode || "default"}
      onPress={restProps.onClick}
      size={isNaN(size) ? sizeMap[size] || sizeMap.small : size}
      icon={(iconProps) => props.children}
    />
  );
}
