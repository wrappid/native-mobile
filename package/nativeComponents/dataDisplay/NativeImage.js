// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/namespace
import { Image } from "react-native";

import { SCImage } from "../../styledComponents/dataDisplay/SCImage";

export default function NativeImage(props) {
  const { src, height, width, ...restProps } = props;
  const autoadjust = (src, height, width) => {
    Image.getSize(src, (originalHeight, originalWidth) => {
      const ratio = originalWidth / originalHeight;

      if (!width) {
        width = height / ratio;
      } else {
        height = width * ratio;
      }
      return height, width;
    });
  };

  return (
    <SCImage
      style={
        height && width ? { height, width } : autoadjust(src, height, width)
      }
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
