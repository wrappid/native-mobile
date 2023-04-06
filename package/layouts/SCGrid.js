import React from 'react';
import styled from 'styled-components/native';
import {View as Grid} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID];

export const SCGrid = styled(
  Grid,
  {},
)(({styleClasses}) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
