import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { ProgressBar } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.LINEAR_PROGRESS];

export const SCLinearProgress = styled(
  ProgressBar,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
