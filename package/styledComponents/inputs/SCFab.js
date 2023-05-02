import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {FAB} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FAB];

export const SCFab = styled(
  FAB,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
