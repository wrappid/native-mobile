import React, { useEffect, useState } from "react";
import { SCStack } from "../../styledComponents/layouts/SCStack";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeStack(props) {
  // direction
  //   'column-reverse'
  // | 'column'
  // | 'row-reverse'
  // | 'row'
  // divider	node
  // spacing
  //   Array<number
  // | string>
  // | number
  // | object
  // | string

  const {
    direction = "column",
    divider,
    spacing = 0,
    styleClasses,
    ...restProps
  } = props;

  const preparedStyleClasses = [
    UtilityClasses.FLEX[
      `DIRECTION_${direction.replace("-", "_").toUpperCase()}`
    ],
    spacing && UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
    UtilityClasses.PADDING[`P${Math.round(spacing / 2).toString()}`],
    ...(styleClasses || []),
  ];

  // const [rowGap, setRowGap] = useState(0);
  // const [columnGap, setColumnGap] = useState(0);

  // useEffect(() => {
  //   if(direction.includes("row")) {
  //     setRowGap(spacing * 8);
  //   } else {
  //     setColumnGap(spacing * 8);
  //   }
  // }, [direction, spacing]);

  return (
    <SCStack {...restProps} styleClasses={preparedStyleClasses}>
      {restProps.children}
    </SCStack>
  );
}
