// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DataTable } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses?.DATA_DISPLAY?.TABLE_HEAD_CELL];

export const SCTableHeadCell = styled(
  DataTable.Title,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
