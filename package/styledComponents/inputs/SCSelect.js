import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import DropDown from 'react-native-paper-dropdown';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.SELECT];

export const SCSelect = styled(
  DropDown,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
