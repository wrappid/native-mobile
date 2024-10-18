// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NaitveBox from "../../layouts/NativeBox";
const NativeFacebookAuthComponent = (props) => {
  const { children } = props;

  return (
    <NaitveBox>
      {children}
    </NaitveBox>
  );
};

export default NativeFacebookAuthComponent;