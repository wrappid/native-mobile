import React from 'react';
import styled from 'styled-components/native';
import {View as Card} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD];

export const SCCard = styled(
  Card,
  {},
)(props => ({
  width: '100%',
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
