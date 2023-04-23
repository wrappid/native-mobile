import styled from 'styled-components/native';
import {getEffectiveStyle} from '@wrappid/styles';
import {List} from 'react-native-paper';

const defaultStyleClasses = [];

export const SCSection = styled(
  List.Section,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
