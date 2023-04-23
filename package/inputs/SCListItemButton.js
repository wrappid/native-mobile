import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {TouchableOpacity} from 'react-native';

const defaultStyleClasses = [CoreClasses.SC.INPUTS.ITEM_BUTTON];

export const SCListItemButton = styled(
  TouchableOpacity,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
