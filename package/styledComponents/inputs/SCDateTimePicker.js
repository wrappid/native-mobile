// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DatePickerModal as DesktopDatePicker } from "react-native-paper-dates";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.DATE_PICKER];

export const SCDateTimePicker = styled(
  DesktopDatePicker,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
