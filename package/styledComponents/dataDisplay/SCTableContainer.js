import React from "react";
import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { View } from "react-native";

const defaultStyleClasses = [
  StyledComponentsClasses.DATA_DISPLAY.TABLE_CONTAINER,
];

export const SCTableContainer = styled(
  View,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
