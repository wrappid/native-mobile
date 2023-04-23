import styled from 'styled-components/native';
import {View as Grid} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID];
const rnpStyleClasses = [];

export const SCGrid = styled(
  Grid,
  {},
)(({styleClasses, container}) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...rnpStyleClasses,
    ...(styleClasses || []),
  ]),
}));
