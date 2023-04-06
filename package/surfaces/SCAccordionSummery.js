import React from 'react';
import styled from 'styled-components/native';
import {View as AccordionSummary} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION_SUMMERY];

export const SCAccordionSummery = styled(
  AccordionSummary,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
