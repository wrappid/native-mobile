import React from "react";
// import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeTypography from "../dataDisplay/NativeTypography";
import { Link } from "react-router-native";

export default function NativeLink(props) {
  const { title, titlePlacement = "top", ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <Link to={props.href} {...restProps} underline="none">
            <NativeTypography>{restProps.children}</NativeTypography>
          </Link>
        </NativeTooltip>
      ) : (
        <Link to={props.href} {...restProps} underline="none">
          <NativeTypography>{restProps.children}</NativeTypography>
        </Link>
      )}
    </>
  );
}
