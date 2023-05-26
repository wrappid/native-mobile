import React from "react";
import { SCCardHeader } from "../../styledComponents/surfaces/SCCardHeader";

export default function NativeCardHeader(props) {
  return (
    <SCCardHeader
      {...props}
      title={props?.title}
      subtitle={props?.subheader}
      right={() => props.action}
    />
  );
}
