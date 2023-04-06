import React from 'react';
import styled from 'styled-components/native';
import {View as MenuList} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.MENU_LIST];

export const SCMenuList = styled(
  MenuList,
  {},
)(props => ({
  backgroundColor: '#fff',
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
