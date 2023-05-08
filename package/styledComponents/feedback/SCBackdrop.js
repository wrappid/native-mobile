import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Modal } from "react-native";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.BACKDROP];

export const SCBackdrop = styled(
  Modal,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
