import React from 'react';
import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {View} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_BODY];

export const SCTableBody = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
