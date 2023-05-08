import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import DropDown from "react-native-paper-dropdown";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.SELECT];

export const SCSelect = styled(
  DropDown,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
