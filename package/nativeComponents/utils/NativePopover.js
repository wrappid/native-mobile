import React from "react";
import { SCPopover } from "../../styledComponents/utils/SCPopover";

export default function NativePopover(props) {
  const { open, onClose, ...restProps } = props;

  console.log("open", open);
  console.log("restPorps", restProps);

  return (
    <SCPopover
      visible={open}
      onDismiss={() => {
        onClose && onClose();
      }}
      {...restProps}
    >
      {restProps.children}
    </SCPopover>
  );
}
