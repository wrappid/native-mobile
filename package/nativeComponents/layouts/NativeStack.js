import React from "react";
import { SCStack } from "../../styledComponents/layouts//SCStack";
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
    spacing,
    styleClasses,
    ...restProps
  } = props;

  const preparedStyleClasses = [
    ...(styleClasses || []),
    UtilityClasses.FLEX[
      `DIRECTION_${direction.replace("-", "_").toUpperCase()}`
    ],
  ];

  return (
    <SCStack {...restProps} styleClasses={preparedStyleClasses}>
      {restProps.children}
    </SCStack>
  );
}
