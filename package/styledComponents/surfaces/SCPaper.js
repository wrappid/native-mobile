// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as Paper } from "react-native";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.PAPER];

export const SCPaper = styled(
  Paper,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
