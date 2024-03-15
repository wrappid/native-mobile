// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.MENU_ITEM];

export const SCMenuItem = styled(
  TouchableOpacity,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
