import React from 'react';
import styled from 'styled-components/native';
import {Badge} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.BADGE];

export const SCBadge = styled(
  Badge,
  {},
)(({props}) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
