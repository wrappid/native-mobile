// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as MenuList } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.MENU_LIST];

export const SCMenuList = styled(
  MenuList,
  {}
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
