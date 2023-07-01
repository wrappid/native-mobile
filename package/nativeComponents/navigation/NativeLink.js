import React from "react";
// import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeTypographyCaption from "../dataDisplay/paragraph/NativeTypographyCaption";
import { Link } from "react-router-native";
import { CoreClasses } from "@wrappid/core";

export default function NativeLink(props) {
  const { title, titlePlacement = "top", ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <Link to={props.href} {...restProps} underline="none">
            <NativeTypographyCaption
              styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
            >
              {restProps.children}
            </NativeTypographyCaption>
          </Link>
        </NativeTooltip>
      ) : (
        <Link to={props.href} {...restProps} underline="none">
          <NativeTypographyCaption
            styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
          >
            {restProps.children}
          </NativeTypographyCaption>
        </Link>
      )}
    </>
  );
}
