import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [
  StyledComponentsClasses.DATA_DISPLAY.TABLE_SORT_LABEL,
];

export const SCTableSortLabel = styled(
  TouchableOpacity,
  {}
)((props) => ({
  padding: 2,
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
