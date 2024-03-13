// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SCAppDiv } from "../../styledComponents/layouts/SCAppDiv";

export default function NativeAppDiv(props) {
  return (
    <SafeAreaProvider>
      <SCAppDiv
        {...props}
        styleClasses={[...(props.styleClasses || []), UtilityClasses.DISPLAY.FLEX]}
      />
    </SafeAreaProvider>
  );
}
