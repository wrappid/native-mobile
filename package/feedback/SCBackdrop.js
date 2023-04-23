import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Modal} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.BACKDROP];

export const SCBackdrop = styled(
  Modal,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
