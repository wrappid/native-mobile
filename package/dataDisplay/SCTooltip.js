import {Tooltip} from 'react-native-paper';
import styled from 'styled-components';
import CoreClasses from '../../styles/CoreClasses';
import {getEffectiveStyle} from '../../styles/CoreUtil';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TOOLTIP];

export const SCTooltip = styled(
  Tooltip,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
