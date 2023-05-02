import React from "react";
import { SCAppDiv } from "../../styledComponents/layouts/SCAppDiv";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NativeAppDiv(props) {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <SCAppDiv {...props}>{props.children}</SCAppDiv>
      </ScrollView>
    </SafeAreaProvider>
  );
}
