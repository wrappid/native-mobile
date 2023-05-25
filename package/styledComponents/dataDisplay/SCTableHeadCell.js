import React from "react";
import styled from "styled-components/native";
import { DataTable } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [
  StyledComponentsClasses?.DATA_DISPLAY?.TABLE_HEAD_CELL,
];

export const SCTableHeadCell = styled(
  DataTable.Title,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
