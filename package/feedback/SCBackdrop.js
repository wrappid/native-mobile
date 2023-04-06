import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.BACKDROP];

export const SCBackdrop = styled(
  Text,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
