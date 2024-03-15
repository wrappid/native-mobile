// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCCard } from "../../styledComponents/surfaces/SCCard";

export default function NativeCard(props) {
  return (
    <SCCard
      {...props}
      mode={props.elevated === false ? "contained" : "elevated"}
    >
      {props.children}
    </SCCard>
  );
}
