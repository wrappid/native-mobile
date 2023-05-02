import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Card} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_CONTENT];

export const SCCardContent = styled(
  Card.Content,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
