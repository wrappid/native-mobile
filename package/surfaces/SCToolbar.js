import styled from 'styled-components';
import {View as Toolbar} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.TOOLBAR];

export const SCToolbar = styled(
  Toolbar,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
