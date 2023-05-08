import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DataTable } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.DATA_DISPLAY.TABLE];

export const SCTable = styled(
  DataTable,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
