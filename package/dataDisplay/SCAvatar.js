import {Avatar} from 'react-native-paper';
import styled from 'styled-components';
import CoreClasses from '../../styles/CoreClasses';
import {getEffectiveStyle} from '../../styles/CoreUtil';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.AVATAR];

export const SCAvatar = styled(
  Avatar,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
