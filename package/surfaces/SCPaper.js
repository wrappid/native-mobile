import React from "react";
import styled from "styled-components";
import { View as Paper } from "react-native";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.PAPER];

export const SCPaper = styled(
  Paper,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
