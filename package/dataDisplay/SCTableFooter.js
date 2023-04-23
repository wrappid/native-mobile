import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_FOOTER];

export const SCTableFooter = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
