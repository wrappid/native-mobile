// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { DatePickerModal as DesktopDatePicker } from "react-native-paper-dates";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.DATE_PICKER];

export const SCDatePicker = styled(
  DesktopDatePicker,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
