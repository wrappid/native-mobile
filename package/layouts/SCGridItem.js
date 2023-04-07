import React from "react";
import styled from "styled-components";
import {View as Paper } from "react-native";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID_ITEM];

export const SCGridItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  ...getEffectiveStyle([...defaultStyleClasses]),
}));
