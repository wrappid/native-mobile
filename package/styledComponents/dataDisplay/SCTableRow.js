import React from "react";
import styled from "styled-components/native";
import { DataTable } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.MOBILE_TABLE_ROW];

export const SCTableRow = styled(
  DataTable.Row,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
