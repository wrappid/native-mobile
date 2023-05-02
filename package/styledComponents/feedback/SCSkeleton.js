import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import { View } from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.SKELETON];

export const SCSkeleton = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
