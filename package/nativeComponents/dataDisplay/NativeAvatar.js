import React from "react";
import { SCAvatar } from "../../styledComponents/dataDisplay/SCAvatar";

export default function NativeAvatar(props) {
  const { src } = props;

  return <SCAvatar {...props} source={{ uri: src }} />;
}
