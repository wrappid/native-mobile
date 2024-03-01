// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { FlatList } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [];

export const SCFlatList = styled(
  FlatList,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
