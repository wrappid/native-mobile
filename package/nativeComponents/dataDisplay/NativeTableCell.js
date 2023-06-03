import React from "react";
import { SCTableCell } from "../../styledComponents/dataDisplay/SCTableHeadCell";
import { SCBox } from "../../styledComponents/layouts/SCBox";

export default function NativeTableCell(props) {
  const { children, ...restProps } = props;
  return (
    <>
      {typeof children === "string" ? (
        <SCTableCell {...restProps}>{children}</SCTableCell>
      ) : (
        <SCBox {...restProps}>
          {children}
        </SCBox>
      )}
    </>
  );
}