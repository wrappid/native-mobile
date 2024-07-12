// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.ITEM_BUTTON];

export const SCListItemButton = styled(
  TouchableOpacity,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
