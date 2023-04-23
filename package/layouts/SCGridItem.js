import styled from 'styled-components/native';
import {View as Grid} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID];
// const rnpStyleClasses = [CoreClasses.SC.RNP.LAYOUTS.GRID];

export const SCGridItem = styled(
  Grid,
  {},
)(({styleClasses}) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
