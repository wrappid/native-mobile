import React from "react";
import { SCAppDiv } from "../../styledComponents/layouts/SCAppDiv";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeAppDiv(props) {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <SCAppDiv
          {...props}
          styleClasses={[...props.styleClasses, UtilityClasses.DISPLAY.FLEX]}
        >
          {props.children}
        </SCAppDiv>
      </ScrollView>
    </SafeAreaProvider>
  );
}
