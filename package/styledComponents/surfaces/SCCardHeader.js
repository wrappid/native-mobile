import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Card } from "react-native-paper";

const defaultStyleClasses = [];
// const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_HEADER];

export const SCCardHeader = styled(
  Card.Title,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
