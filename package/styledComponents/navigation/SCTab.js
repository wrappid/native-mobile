// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.TAB_MOBILE];
const defaultStyleClassesActive = [StyledComponentsClasses.NAVIGATION.TAB_MOBILE_ACTIVE];

export const SCTab = styled(
  TouchableOpacity,
  {}
)((props) => ({
  ...getEffectiveStyle(
    props?.active
      ? [...defaultStyleClassesActive, ...(props?.styleClasses || [])]
      : [...defaultStyleClasses, ...(props?.styleClasses || [])]
  ),
}));
