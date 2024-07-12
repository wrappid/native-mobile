// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Chip } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.CHIP];

export const SCChip = styled(
  Chip,
  {}
)(({ props }) => ({
  backgroundColor: "rgba(0,0,0,0.08)",
  borderRadius   : 16,
  color          : "black",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
