import {Chip} from 'react-native-paper';
import styled from 'styled-components';
import CoreClasses from '../../styles/CoreClasses';
import {getEffectiveStyle} from '../../styles/CoreUtil';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.CHIP];

export const SCChip = styled(
  Chip,
  {},
)(({props}) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
