import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Tabs } from "react-native-paper-tabs";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.TABS];

export const SCTabs = styled(
  Tabs,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
