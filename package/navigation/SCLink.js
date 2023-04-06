import React from 'react';
import styled from 'styled-components/native';
import {Text as Link} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.LINK];

export const SCLink = styled(
  Link,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
