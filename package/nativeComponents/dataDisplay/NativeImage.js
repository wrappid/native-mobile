// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/namespace

import { SCImage } from "../../styledComponents/dataDisplay/SCImage";

export default function NativeImage(props) {
  const { src, height, width, ...restProps } = props;

  //  eslint-disable-next-line etc/no-commented-out-code
  /*  const autoadjust = (src, height, width) => {
    try{
      return Image.getSize(src, (originalHeight, originalWidth) => {
        const ratio = originalWidth / originalHeight;
  
        if (!width) {
          width = height / ratio;
        } else {
          height = width * ratio;
        }
        return { height, width };
      });
    }
    catch(error)
    {
      // eslint-disable-next-line no-console
      console.error("Error in autoadjust:", error);
    }
  }; */

  return (
    <SCImage
      style={
        // eslint-disable-next-line etc/no-commented-out-code
        // height && width ? { height, width } : autoadjust(src, height, width)
        // { height, width: width || "100%" }
        height && width ? { height, width } : {}
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
