import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.CIRCULAR_PROGRESS];

export const SCCircularProgress = styled(
  ActivityIndicator,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
