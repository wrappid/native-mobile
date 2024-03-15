// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import { useTheme } from "react-native-paper";

import NativeFormHelperText from "./NativeFormHelperText";
import { __IconTypes } from "../../styledComponents/dataDisplay/SCIcon";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeBox from "../layouts/NativeBox";

export default function NativeFormErrorText(props) {
  const theme = useTheme();

  return (
    <NativeBox styleClasses={[UtilityClasses.FLEX.DIRECTION_ROW]}>
      <NativeIcon
        style={{ color: theme.colors.primary }}
        styleClasses={[UtilityClasses.MARGIN.MR1]}
        type={__IconTypes.MATERIAL_ICON}
        name="warning"
      />

      <NativeFormHelperText error {...props}>
        {props.children}
      </NativeFormHelperText>
    </NativeBox>
  );
}
