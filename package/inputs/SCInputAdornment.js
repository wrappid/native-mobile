import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.INPUT_ADORNMENT];

export const SCInputAdornment = styled(
  Text,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
