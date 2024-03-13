// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCDivider } from "../../styledComponents/dataDisplay/SCDivider.js";

export default function NativeDivider(props) {
  // eslint-disable-next-line no-unused-vars
  const { orientation, variant, styleClasses, style, ...restProps } = props;

  const getVariantProps = () => {
    let variantProps = {};

    if (variant === "inset") {
      variantProps["leftInset"] = true;
    } else if (variant === "middle") {
      variantProps["horizontalInset"] = true;
    }
    return variantProps;
  };

  return (
    <SCDivider
      {...restProps}
      {...getVariantProps}
      style={
        orientation === "vertical"
          ? {
            ...(style | {}),
            height : "100%",
            padding: 0.5,
          }
          : style
      }
    />
  );
}
