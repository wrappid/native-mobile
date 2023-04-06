import React from 'react';
import styled from 'styled-components/native';
import {Divider} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.DIVIDER];

export const SCDivider = styled(
  Divider,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
