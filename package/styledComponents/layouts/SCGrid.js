import styled from "styled-components/native";
import { View as Grid } from "react-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID];
const rnpStyleClasses = [];

export const SCGrid = styled(
  Grid,
  {}
)(({ styleClasses, container }) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...rnpStyleClasses,
    ...(styleClasses || []),
  ]),
}));
