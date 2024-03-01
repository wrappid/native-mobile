// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { Modal } from "react-native";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.UTILS.MODAL];

export const SCModal = styled(
  Modal,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
