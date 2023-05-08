import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { List } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.ACCORDION];

export const SCAccordion = styled(
  List.Accordion,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
