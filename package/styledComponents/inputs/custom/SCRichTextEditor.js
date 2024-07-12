// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses, getEffectiveStyle } from "@wrappid/styles";
import { TextInput as Input } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
  Input,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
