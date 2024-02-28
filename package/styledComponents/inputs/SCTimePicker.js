// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { TimePickerModal } from "react-native-paper-dates";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.TIME_PICKER];

export const SCTimePicker = styled(
  TimePickerModal,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
