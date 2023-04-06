import React from 'react';
import styled from 'styled-components/native';
import {Text as MenuItem} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.MENU_ITEM];

export const SCMenuItem = styled(
  MenuItem,
  {},
)(props => ({
  backgroundColor: '#fff',
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
