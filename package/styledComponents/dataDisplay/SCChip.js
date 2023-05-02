import React from 'react';
import styled from 'styled-components/native';
import {Chip} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.CHIP];

export const SCChip = styled(
  Chip,
  {},
)(({props}) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
