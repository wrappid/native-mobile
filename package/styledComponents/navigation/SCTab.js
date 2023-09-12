import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { TouchableOpacity } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.TAB_MOBILE];
const defaultStyleClassesActive = [
  StyledComponentsClasses.NAVIGATION.TAB_MOBILE_ACTIVE,
];

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
