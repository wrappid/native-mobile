import styled from 'styled-components/native';
import {View as Box} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.LIST_ITEM];

export const SCListItem = styled(
  Box,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
