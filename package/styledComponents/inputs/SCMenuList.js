import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { View } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.INPUT];
export const SCMenuList = styled(
  View,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
