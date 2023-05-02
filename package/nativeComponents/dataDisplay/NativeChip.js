import React from "react";
import { variantMap } from "../../helper/componentPropsUtils";
import { SCChip } from "../../styledComponents/dataDisplay/SCChip";

export default function NativeChip(props) {
  const { label, variant, ...restProps } = props;
  return (
    <SCChip {...restProps} mode={variantMap[variant]}>
      {label}
    </SCChip>
  );
}
