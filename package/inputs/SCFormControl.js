import styled from 'styled-components/native';
import {View} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FORM_CONTROL];

export const SCFormControl = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
