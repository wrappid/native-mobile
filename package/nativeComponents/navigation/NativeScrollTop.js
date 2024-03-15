// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeBox from "../layouts/NativeBox";

export default function NativeScrollTop(props) {
  const { children } = props;
  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {};

  return (
    <NativeBox onClick={handleClick} role="presentation">
      {children}
    </NativeBox>
  );
}
