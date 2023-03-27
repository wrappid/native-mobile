import {Checkbox} from 'react-native-paper';
import styled from 'styled-components';
import CoreClasses from '../../styles/CoreClasses';
import {getEffectiveStyle} from '../../styles/CoreUtil';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.CHECKBOX];

export const SCCheckbox = styled(
  Checkbox,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
