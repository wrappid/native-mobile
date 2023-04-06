import React from 'react';
import styled from 'styled-components/native';
import {View as Fade} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.UTILS.FADE];

export const SCFade = styled(
  Fade,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
