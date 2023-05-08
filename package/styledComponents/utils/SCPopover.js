import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Menu } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.UTILS.POPOVER];

export const SCPopover = styled(
  Menu,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
