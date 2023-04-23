import styled from 'styled-components/native';
import {Switch} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.SWITCH];

export const SCSwitch = styled(
  Switch,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
