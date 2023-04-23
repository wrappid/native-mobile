import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {List} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION];

export const SCAccordion = styled(
  List.Accordion,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
