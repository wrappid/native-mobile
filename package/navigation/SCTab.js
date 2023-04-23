import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {TabScreen} from 'react-native-paper-tabs';

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.TAB];

export const SCTab = styled(
  TabScreen,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
