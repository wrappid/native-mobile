import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Appbar} from 'react-native-paper';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.APP_BAR];

export const SCAppBar = styled(Appbar.Header, {
  // shouldForwardProp: (prop) => prop !== "open",
})(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
