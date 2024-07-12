// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import {
  getEffectiveStyle,
  StyledComponentsClasses,
  UtilityClasses
// eslint-disable-next-line import/no-unresolved
} from "@wrappid/styles";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.BUTTON];

export const SCButton = styled(
  Button,
  {}
)((props) => ({ ...getEffectiveStyle([UtilityClasses.MARGIN.MY1, ...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
