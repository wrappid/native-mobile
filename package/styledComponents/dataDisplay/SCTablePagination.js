import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DataTable } from "react-native-paper";

const defaultStyleClasses = [
  StyledComponentsClasses.DATA_DISPLAY.TABLE_PAGINATION,
];

export const SCTablePagination = styled(
  DataTable.Pagination,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
