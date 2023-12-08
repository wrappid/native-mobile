import React from "react";
import NativeStack from "../layouts/NativeStack";

export default function NativeAvatarGroup(props) {
  const { children, ...restProps } = props;
  return <NativeStack direction="row">{children}</NativeStack>;
}
