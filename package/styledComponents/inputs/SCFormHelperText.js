import React from "react";
import styled from "styled-components/native";
import { HelperText } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.FORM_HELPER_TEXT];

export const SCFormHelperText = styled(
  HelperText,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
