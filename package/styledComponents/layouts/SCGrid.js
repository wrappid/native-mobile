// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as Grid } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.GRID];
const rnpStyleClasses = [];

// eslint-disable-next-line no-unused-vars
export const SCGrid = styled( Grid, {} )(({ styleClasses, container }) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...rnpStyleClasses, ...(styleClasses || [])]) }));
