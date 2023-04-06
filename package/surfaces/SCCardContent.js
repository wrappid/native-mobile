import React from 'react';
import styled from 'styled-components/native';
import {View as CardContent} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_CONTENT];

export const SCCardContent = styled(
  CardContent,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
