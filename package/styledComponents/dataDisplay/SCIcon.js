import React, {useContext} from 'react';
import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {getEffectiveStyle, StyledComponentsClasses} from '@wrappid/styles';
// import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import {overrideCustomIcons} from '../../helper/iconUtil';
import {IconContext} from '@wrappid/core';

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.ICON];

export const __IconTypes = {
  MATERIAL_ICON: 'material-icons', // Default support of MUI
  MATERIAL_OUTLINED_ICON: 'material-icons-outlined',
  FONTAWESOME_V5_SOLID_ICON: 'fas',
  FONTAWESOME_V5_REGULAR_ICON: 'far',
  // RXICON_V1_REGULAR_ICON: "rxi",
};

export function SCIcon(props) {
  const customIcons = useContext(IconContext);
  // @todo exapnd this for custom icons
  const iconMap = {
    [__IconTypes.MATERIAL_ICON]: MaterialIcon,
    [__IconTypes.MATERIAL_OUTLINED_ICON]: MaterialIcon,
    [__IconTypes.FONTAWESOME_V5_SOLID_ICON]: FontAwesomeIcon,
    [__IconTypes.FONTAWESOME_V5_REGULAR_ICON]: FontAwesomeIcon,
    ...overrideCustomIcons(customIcons),
    // [__IconTypes.RXICON_V1_REGULAR_ICON]: createIconSetFromIcoMoon(rxIconJson),
  };

  // console.log('ICON SP', props.iconType);
  const styleIcon = styled(
    props.iconType && iconMap[props.iconType]
      ? iconMap[props.iconType]
      : __IconTypes[props.iconType]
      ? iconMap[__IconTypes[props.iconType]]
        ? iconMap[__IconTypes[props.iconType]]
        : MaterialIcon
      : MaterialIcon,
    {},
  )(props => ({
    ...getEffectiveStyle([
      ...defaultStyleClasses,
      ...(props?.styleClasses || []),
    ]),
  }));

  return React.createElement(styleIcon, props, null);
}
