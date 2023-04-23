import styled from 'styled-components/native';
import {Avatar} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.AVATAR];

export const SCAvatar = styled(
  Avatar.Image,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
