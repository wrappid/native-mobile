// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCFab } from "../../styledComponents/inputs/SCFab";

export default function NativeFab(props) {
  return <SCFab icon={props?.children?.props?.icon} {...props} />;
}
