import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Menu} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.UTILS.POPOVER];

export const SCPopover = styled(
  Menu,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
