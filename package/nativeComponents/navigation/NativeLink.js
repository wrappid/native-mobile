import React from "react";
// import { SCLink } from "../../navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import { Link } from "react-router-native";

export default function NativeLink(props) {
  const { title, titlePlacement = "top", ...restProps } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <Link to={props.href} {...restProps} underline="none">
            {restProps.children}
          </Link>
        </NativeTooltip>
      ) : (
        <Link to={props.href} {...restProps} underline="none">
          {restProps.children}
        </Link>
      )}
    </>
  );
}
