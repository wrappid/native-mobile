import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { IconContext } from "@wrappid/core";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import styled from "styled-components/native";

import { overrideCustomIcons } from "../../helper/iconUtil";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.ICON];

export const __IconTypes = {
  FONTAWESOME_V5_REGULAR_ICON: "far", 
  FONTAWESOME_V5_SOLID_ICON  : "fas",
  
  MATERIAL_ICON         : "material-icons",
  // Default support of MUI
  MATERIAL_OUTLINED_ICON: "material-icons-outlined",
};

export function SCIcon(props) {
  const customIcons = useContext(IconContext);
  // @todo exapnd this for custom icons
  const iconMap = {
    [__IconTypes.MATERIAL_ICON]              : MaterialIcon,
    [__IconTypes.MATERIAL_OUTLINED_ICON]     : MaterialIcon,
    [__IconTypes.FONTAWESOME_V5_SOLID_ICON]  : FontAwesomeIcon,
    [__IconTypes.FONTAWESOME_V5_REGULAR_ICON]: FontAwesomeIcon,
    "material-community-icon"                : MaterialCommunityIcons,
    ...overrideCustomIcons(customIcons),
  };

  const styleIcon = styled(
    props.iconType && iconMap[props.iconType]
      ? iconMap[props.iconType]
      : __IconTypes[props.iconType]
        ? iconMap[__IconTypes[props.iconType]]
          ? iconMap[__IconTypes[props.iconType]]
          : MaterialIcon
        : MaterialIcon,
    {}
  )(props => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));

  return React.createElement(styleIcon, props, null);
}
