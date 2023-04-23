import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {View} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.ACCORDION_DETAILS];

export const SCAccordionDetail = styled(
  View,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
