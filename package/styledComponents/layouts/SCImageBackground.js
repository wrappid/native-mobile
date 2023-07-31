import React from "react";
import styled from "styled-components";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { ImageBackground } from "react-native";

const defaultStyleClasses = [];

export const SCImageBackground = styled(
    ImageBackground,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
