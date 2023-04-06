import React from 'react';
import {Checkbox} from 'react-native-paper';
import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.CHECKBOX];

export const SCCheckbox = styled(
  Checkbox,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
