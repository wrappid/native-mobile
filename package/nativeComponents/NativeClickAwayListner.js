// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeBox from "./layouts/NativeBox";
export default function NativeClickAwayListner(props) {
  const { children } = props;

  return (
    <NativeBox>
      {children}
    </NativeBox>
  );
}
