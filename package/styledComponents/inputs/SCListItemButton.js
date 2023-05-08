import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { TouchableOpacity } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.ITEM_BUTTON];

export const SCListItemButton = styled(
  TouchableOpacity,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
