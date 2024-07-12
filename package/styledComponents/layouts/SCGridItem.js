// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as Grid } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID];

export const SCGridItem = styled(
  Grid,
  {}
)(({ styleClasses }) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]) }));
