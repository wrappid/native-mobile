import React from 'react';
import styled from 'styled-components/native';
import {DatePickerModal as DesktopDatePicker} from 'react-native-paper-dates';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.TIME_PICKER];

export const SCTimePicker = styled(
  DesktopDatePicker,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
