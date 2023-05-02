import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {View} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.INPUT];
export const SCMenuList = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
