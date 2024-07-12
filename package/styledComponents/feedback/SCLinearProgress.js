// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { ProgressBar } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.LINEAR_PROGRESS];

export const SCLinearProgress = styled(
  ProgressBar,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
