import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { View } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.SKELETON];

export const SCSkeleton = styled(
  View,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
