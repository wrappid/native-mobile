import styled from "styled-components/native";
import { View as MenuList } from "react-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.MENU_LIST];

export const SCMenuList = styled(
  MenuList,
  {}
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
