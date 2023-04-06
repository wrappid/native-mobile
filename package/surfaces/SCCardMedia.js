import React from 'react';
import styled from 'styled-components/native';
import {View as CardMedia} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_MEDIA];

export const SCCardMedia = styled(
  CardMedia,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
