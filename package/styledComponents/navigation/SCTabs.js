import styled from 'styled-components/native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {Tabs} from 'react-native-paper-tabs';

const defaultStyleClasses = [CoreClasses.NAVIGATION.TABS];

export const SCTabs = styled(
  Tabs,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
