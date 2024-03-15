// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/named
import { NativeInput } from "./NativeInput";

export default function NativePhone(props) {
  return <NativeInput {...props} type="number" />;
}
