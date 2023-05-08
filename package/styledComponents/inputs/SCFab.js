import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { FAB } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.FAB];

export const SCFab = styled(
  FAB,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
