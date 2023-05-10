import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { TouchableOpacity } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.MENU_ITEM];

export const SCMenuItem = styled(
  TouchableOpacity,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));