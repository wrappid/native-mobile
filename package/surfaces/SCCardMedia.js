import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Card} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_MEDIA];

export const SCCardMedia = styled(
  Card.Cover,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
