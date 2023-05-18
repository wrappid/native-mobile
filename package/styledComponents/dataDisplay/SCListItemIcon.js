import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [
  StyledComponentsClasses.DATA_DISPLAY.LIST_ITEM_ICON,
];

export const SCListItemIcon = styled(
  View,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
