import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [
  StyledComponentsClasses.DATA_DISPLAY.TABLE_SORT_LABEL,
];

export const SCTableSortLabel = styled(
  Text,
  {}
)((props) => ({
  padding: 2,
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
