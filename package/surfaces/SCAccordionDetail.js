import React from 'react';
import styled from 'styled-components/native';
import {View as AccordionDetails} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION_DETAILS];

export const SCAccordionDetail = styled(
  AccordionDetails,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
