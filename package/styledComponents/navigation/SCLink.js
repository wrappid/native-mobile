// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Link } from "react-router-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.LINK];

export const SCLink = styled(
  Link,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
