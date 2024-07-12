// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Text } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.ALERT];

export const SCAlertTitle = styled(
  Text,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
