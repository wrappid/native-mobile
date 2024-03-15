// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
import { Divider } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [];

export const SCDivider = styled(
  Divider,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
