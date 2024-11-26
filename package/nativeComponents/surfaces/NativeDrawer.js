// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { ScrollView } from "react-native";

import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";

export default function NativeDrawer(props) {
  return (
    props.open && (
      // <NativeBox
      //   styleClasses={[UtilityClasses?.DISPLAY?.FLEX, UtilityClasses?.POSITION?.FIXED_TOP, UtilityClasses?.POSITION?.FIXED_BOTTOM]}
      //   // @todo should be removed if background color opacity support
      //   // can be given in styleclasses
      //   style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      // >
      //   <NativeBox
      //     styleClasses={[UtilityClasses?.DISPLAY?.FLEX, UtilityClasses?.OPACITY?.OPACITY_100, UtilityClasses?.WIDTH?.W_75, UtilityClasses?.BG?.BG_WHITE]}
      //   >
      <SCDrawer
        {...props} 
        styleClasses={[
          UtilityClasses?.POSITION?.POSITION_ABSOLUTE,
          UtilityClasses?.POSITION?.TOP_0,
          UtilityClasses?.POSITION?.BOTTOM_0,
          UtilityClasses?.WIDTH?.W_75,
          UtilityClasses?.BG?.BG_WHITE,
          UtilityClasses?.Z_INDEX?.Z_3,
          ...(props.styleClasses || []),
        ]}
      >
        <ScrollView>{props.children}</ScrollView>
      </SCDrawer>
      //   </NativeBox>
      // </NativeBox>
    )
  );
}
