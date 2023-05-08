import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Card } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_MEDIA];

export const SCCardMedia = styled(
  Card.Cover,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
