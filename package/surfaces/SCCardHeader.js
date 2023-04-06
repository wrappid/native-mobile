import React from 'react';
import styled from 'styled-components/native';
import {View as CardHeader} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_HEADER];

export const SCCardHeader = styled(
  CardHeader,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
