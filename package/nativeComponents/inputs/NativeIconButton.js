import React from "react";
import { SCIconButton } from "../../styledComponents/inputs/SCIconButton";

export default function NativeIconButton(props) {
  const { title, titlePlacement = "bottom", size, mode, ...restProps } = props;
  const sizeMap = {
    small: 8,
    large: 48,
    medium: 24,
  };

  return (
    <SCIconButton
      mode={mode || "default"}
      onPress={restProps.onClick}
      size={isNaN(size) ? sizeMap[size] || sizeMap.small : size}
      icon={(iconProps) => props.children}
    />
  );
}
