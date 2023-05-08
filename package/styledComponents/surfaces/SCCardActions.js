import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Card } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_ACTIONS];

export const SCCardActions = styled(
  Card.Actions,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
