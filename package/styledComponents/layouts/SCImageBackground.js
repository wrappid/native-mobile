// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { ImageBackground } from "react-native";
import styled from "styled-components";

const defaultStyleClasses = [];

export const SCImageBackground = styled(
  ImageBackground,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
