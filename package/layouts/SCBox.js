import {View as Box} from 'react-native';
import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.BOX];

export const SCBox = styled(
  Box,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
