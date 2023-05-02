import React from "react";
import { SCImage } from "../../styledComponents/dataDisplay/SCImage";

export default function NativeImage(props) {
  const { src, height, width, ...restProps } = props;

  return (
    <SCImage
      style={{ height, width }}
      source={
        src
          ? typeof src === "string" && src.includes("http")
            ? { uri: src }
            : src
          : ""
      }
      {...restProps}
    />
  );
}
