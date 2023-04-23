import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {View} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.MENU_ITEM];

export const SCMenuItem = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
