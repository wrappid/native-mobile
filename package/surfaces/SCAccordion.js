import React from 'react';
import styled from 'styled-components/native';
import {View as Box} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION];

export const SCAccordion = styled(
  Box,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
