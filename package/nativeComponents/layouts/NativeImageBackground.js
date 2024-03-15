// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCImageBackground } from "../../styledComponents/layouts/SCImageBackground";

export default function NativeImageBackground(props) {
  return (
    <SCImageBackground
      {...props}
      style={{ ...(props.style || {}), flex: 1, justifyContent: "center" }}
    >
      {props.children}
    </SCImageBackground>
  );
}
