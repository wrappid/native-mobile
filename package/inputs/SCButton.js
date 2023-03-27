import {Button} from 'react-native-paper';
import styled from 'styled-components';
import CoreClasses from '../../styles/CoreClasses';
import {getEffectiveStyle} from '../../styles/CoreUtil';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.BUTTON];

export const SCButton = styled(
  Button,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
