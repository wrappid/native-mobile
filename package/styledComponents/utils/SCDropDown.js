import React from "react";
import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Menu } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.UTILS.DROPDOWN];

export const SCDropDown = styled(
  Menu,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
