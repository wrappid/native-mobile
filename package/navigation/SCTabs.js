import React from 'react';
import styled from 'styled-components/native';
import {View as Tabs} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.NAVIGATION.TABS];

export const SCTabs = styled(
  Tabs,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
