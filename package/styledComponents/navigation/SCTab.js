import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { TabScreen } from "react-native-paper-tabs";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.TAB];

export const SCTab = styled(
  TabScreen,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
