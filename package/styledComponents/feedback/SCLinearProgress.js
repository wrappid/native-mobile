import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {ProgressBar} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.LINEAR_PROGRESS];

export const SCLinearProgress = styled(
  ProgressBar,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
