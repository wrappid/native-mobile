import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [
  StyledComponentsClasses.FEEDBACK.CIRCULAR_PROGRESS,
];

export const SCCircularProgress = styled(
  ActivityIndicator,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
