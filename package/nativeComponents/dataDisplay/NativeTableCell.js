import React from "react";
import { SCTableCell } from "../../styledComponents/dataDisplay/SCTableCell";
import { SCBox } from "../../styledComponents/layouts/SCBox";
import { UtilityClasses } from "@wrappid/styles";

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
