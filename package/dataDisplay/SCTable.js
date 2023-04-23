import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {DataTable} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE];

export const SCTable = styled(
  DataTable,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
