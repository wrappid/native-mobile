import React from 'react';
import styled from 'styled-components/native';
import {TextInput as Input} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.AUTO_COMPLETE];

export const SCAutocomplete = styled(
  Input,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
