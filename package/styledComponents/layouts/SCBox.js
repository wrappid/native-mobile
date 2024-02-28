// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as Box } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.BOX];

export const SCBox = styled(
  Box,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
