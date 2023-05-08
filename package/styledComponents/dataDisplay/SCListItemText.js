import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [
  StyledComponentsClasses.DATA_DISPLAY.LIST_ITEM_TEXT,
];

export const SCListItemText = styled(
  Text,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
