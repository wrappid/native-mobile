import React from "react";
import styled from "styled-components/native";
import { Dialog } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.DIALOG_CONTENT];

export const SCDialogContent = styled(
  Dialog.Content,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
