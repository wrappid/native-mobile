// import { styled } from "@mui/material";
import React from 'react';
import styled from 'styled-components/native';
import {View as AppBar} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.APP_BAR];

export const SCAppBar = styled(AppBar, {
  // shouldForwardProp: (prop) => prop !== "open",
})(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
