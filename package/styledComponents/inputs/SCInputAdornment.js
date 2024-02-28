// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT_ADORNMENT];

export const SCInputAdornment = styled(
  View,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
