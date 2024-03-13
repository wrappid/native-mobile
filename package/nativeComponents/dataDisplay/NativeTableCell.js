// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCTableCell } from "../../styledComponents/dataDisplay/SCTableCell";
import { SCBox } from "../../styledComponents/layouts/SCBox";

export default function NativeTableCell(props) {
  const { children, styleClasses, ...restProps } = props;

  return (
    <>
      {typeof children === "string" ? (
        <SCTableCell {...restProps}>{children}</SCTableCell>
      ) : (
        <SCBox
          {...restProps}
          styleClasses={[...(styleClasses || []), UtilityClasses?.WIDTH?.W_100]}
        >
          {children}
        </SCBox>
      )}
    </>
  );
}
