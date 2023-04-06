import React from 'react';
import styled from 'styled-components/native';
import {View as Modal} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.UTILS.MODAL];

export const SCModal = styled(
  Modal,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
