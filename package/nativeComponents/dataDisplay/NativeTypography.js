// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { variantMap } from "../../helper/componentUtil";
import { SCTypography } from "../../styledComponents/dataDisplay/SCTypography";

export default function NativeTypography(props) {
  const { variant, component, children, ...restProps } = props;
  //Do not use this directly use NativeParagraph

  return (
    <SCTypography
      {...restProps}
      component={component}
      variant={variantMap ? variantMap[variant] : null}
    >
      {children}
    </SCTypography>
  );
}
