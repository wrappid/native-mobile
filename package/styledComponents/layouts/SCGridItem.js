import styled from "styled-components/native";
import { View as Grid } from "react-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID];
// const rnpStyleClasses = [StyledComponentsClasses.RNP.LAYOUTS.GRID];

export const SCGridItem = styled(
  Grid,
  {}
)(({ styleClasses }) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
