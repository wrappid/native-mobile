import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Image} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.IMAGE];

export const SCImage = styled(
  Image,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
