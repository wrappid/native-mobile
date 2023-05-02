import React from 'react';
import styled from 'styled-components/native';
import {Drawer} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
// import {theme} from '../theme/theme';

// const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.DRAWER];
const defaultStyleClasses = [];

export const SCDrawer = styled(Drawer.Section, {
  // shouldForwardProp: prop => prop !== 'open',
})(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
