import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Image } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.IMAGE];

export const SCImage = styled(
  Image,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
