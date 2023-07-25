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
    ...(styleClasses || []),
    UtilityClasses.FLEX[
      `DIRECTION_${direction.replace("-", "_").toUpperCase()}`
    ],
    spacing && UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
    UtilityClasses.PADDING[`P${spacing.toString()}`]
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
