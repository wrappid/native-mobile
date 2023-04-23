import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [];

export const SCButton = styled(
  Button,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
