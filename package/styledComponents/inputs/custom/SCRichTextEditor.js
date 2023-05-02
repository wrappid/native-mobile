import React from 'react';
import styled from 'styled-components/native';
import {TextInput as Input} from 'react-native-paper';
import {CoreClasses, getEffectiveStyle} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.CUSTOM.RICH_TEXT_EDITOR];

export const SCRichTextEditor = styled(
  Input,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
