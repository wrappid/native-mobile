// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/named
import { NativeInput } from "./NativeInput";

export default function NativeTextarea(props) {
  return (
    <NativeInput
      {...props}
      multiline={true}
      minRows={3}
      maxRows={6}
      inputProps={{ style: { resize: "vertical" } }}
    />
  );
}
