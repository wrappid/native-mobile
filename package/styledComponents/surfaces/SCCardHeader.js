// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyleClasses = [];

export const SCCardHeader = styled(
  Card.Title,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
