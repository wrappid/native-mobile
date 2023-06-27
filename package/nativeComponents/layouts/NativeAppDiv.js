import React from "react";
import { SCAppDiv } from "../../styledComponents/layouts/SCAppDiv";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeAppDiv(props) {
  return (
    <SafeAreaProvider>
      <SCAppDiv
        {...props}
        styleClasses={[
          ...(props.styleClasses || []),
          UtilityClasses.DISPLAY.FLEX,
        ]}
      />
    </SafeAreaProvider>
  );
}
