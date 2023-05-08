import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { View } from "react-native";

const defaultStyleClasses = [
  StyledComponentsClasses.SURFACES.ACCORDION_SUMMERY,
];

export const SCAccordionSummery = styled(
  View,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
