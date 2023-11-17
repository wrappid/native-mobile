import styled from "styled-components/native";
import { Link } from "react-router-native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.LINK];

export const SCLink = styled(
  Link,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
