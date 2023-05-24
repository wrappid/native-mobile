import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.LAYOUTS.LIST_ITEM];

export const SCListItem = styled(
  TouchableOpacity,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
