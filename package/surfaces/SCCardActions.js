import React from 'react';
import styled from 'styled-components/native';
import {View as CardActions} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_ACTIONS];

export const SCCardActions = styled(
  CardActions,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
