// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { cloneElement, isValidElement } from "react";

// eslint-disable-next-line import/no-unresolved
import { CoreBox } from "@wrappid/core";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCStack } from "../../styledComponents/layouts/SCStack";
import NativeDivider from "../dataDisplay/NativeDivider";

export default function NativeStack(props) {

  const {
    // eslint-disable-next-line no-unused-vars
    component,
    direction = "column",
    divider,
    // spacing = 0,
    /**
     * @todo need to implment whenever it is required
     */
    // useFlexGap,
    // eslint-disable-next-line no-unused-vars
    flexWrap,
    styleClasses,
    children,
    ...restProps
  } = props;

  const preparedStyleClasses = [
    UtilityClasses.FLEX[
      `DIRECTION_${direction.replace("-", "_").toUpperCase()}`
    ],
    UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_START,
    UtilityClasses?.FLEX?.FLEX_WRAP_WRAP,
    ...(styleClasses || []),
  ];

  const childrenWithProps = () => {
    let marginClasses = [];
    
    // eslint-disable-next-line etc/no-commented-out-code
    // let marginString = "M";
    // if (direction.includes("column")) {
    //   marginString += "T" + spacing;
    //   marginString = marginString.toUpperCase();
    //   marginClasses.push(UtilityClasses?.MARGIN[marginString]);
    // } else {
    //   marginString += "L" + spacing;
    //   marginClasses.push(UtilityClasses?.MARGIN[marginString]);
    // }

    let newChildren =
      children &&
      Array.isArray(children) &&
      children?.map((child, index) => {
        if (child && isValidElement(child)) {
          const { styleClasses, ...restChildProps } = child?.props || {};
          let childStyleClasses =
            index > 0
              ? [...(styleClasses || [])]
              : styleClasses;
          let newChild = cloneElement(child, {
            ...restChildProps,
            styleClasses: childStyleClasses,
          });

          return (
            <>
              {newChild}

              {divider && index < children?.length - 1 && (
                <CoreBox styleClasses={marginClasses}>
                  <NativeDivider
                    orientation={
                      direction === "column" ? "horizontal" : "vertical"
                    }
                  />
                </CoreBox>
              )}
            </>
          );
        } else {
          return child;
        }
      });

    return newChildren;
  };

  return (
    <SCStack {...restProps} styleClasses={preparedStyleClasses}>
      {childrenWithProps()}
    </SCStack>
  );
}
