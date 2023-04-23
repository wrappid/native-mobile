import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {View} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.APP_DIV];

export const SCAppDiv = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
