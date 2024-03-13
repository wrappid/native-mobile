// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCListItemButton } from "../../styledComponents/inputs/SCListItemButton";

export default function NativeListItemButton(props) {
  const { OnClick, ...restProps } = props;

  return (
    <SCListItemButton onPress={OnClick} {...restProps}>
      {restProps.children}
    </SCListItemButton>
  );
}
