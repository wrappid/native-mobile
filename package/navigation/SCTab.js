import React from 'react';
import styled from 'styled-components/native';
import {View as Tab} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.TAB];

export const SCTab = styled(
  Tab,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
