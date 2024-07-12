// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as MenuItem } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.MENU_ITEM];

export const SCMenuItem = styled(
  MenuItem,
  {}
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
