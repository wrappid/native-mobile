// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
import { List } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [];

export const SCSection = styled(
  List.Section,
  {}
)(props => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
