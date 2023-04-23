import React from 'react';
import styled from 'styled-components/native';
import {Drawer} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';
import {theme} from '../theme/theme';

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.DRAWER];

export const SCRightDrawer = styled(Drawer.Section, {})(props => ({
}));