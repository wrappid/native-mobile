// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { ScrollView } from "react-native";

import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";
import NativeBox from "../layouts/NativeBox";

export default function NativeDrawer(props) {
  return (
    props.open && (
      <NativeBox
        styleClasses={[UtilityClasses?.DISPLAY?.FLEX, UtilityClasses?.POSITION?.FIXED_TOP, UtilityClasses?.POSITION?.FIXED_BOTTOM]}
        // @todo should be removed if background color opacity support
        // can be given in styleclasses
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <NativeBox
          styleClasses={[UtilityClasses?.DISPLAY?.FLEX, UtilityClasses?.OPACITY?.OPACITY_100, UtilityClasses?.WIDTH?.W_75, UtilityClasses?.BG?.BG_WHITE]}
        >
          <SCDrawer styleClasses={[UtilityClasses?.DISPLAY?.FLEX]}>
            <ScrollView>{props.children}</ScrollView>
          </SCDrawer>
        </NativeBox>
      </NativeBox>
    )
  );
}
