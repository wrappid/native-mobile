// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Checkbox } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.CHECKBOX];

export const SCCheckbox = styled(
  Checkbox,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
