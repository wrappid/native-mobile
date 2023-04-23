import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Card} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD];

export const SCCard = styled(
  Card,
  {},
)(props => ({
  width: '100%',
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
