import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.BUTTON];

export const SCButton = styled(
  Button,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
