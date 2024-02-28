// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View as CardActionArea } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.CARD_ACTION_AREA];

export const SCCardActionArea = styled(
  CardActionArea,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
