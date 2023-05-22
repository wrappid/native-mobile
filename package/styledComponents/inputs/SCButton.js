import { Button } from "react-native-paper";
import styled from "styled-components/native";
import {
  getEffectiveStyle,
  StyledComponentsClasses,
  UtilityClasses,
} from "@wrappid/styles";

const defaultStyleClasses = [];

export const SCButton = styled(
  Button,
  {}
)((props) => ({
  ...getEffectiveStyle([
    UtilityClasses.MARGIN.MY1,
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
