// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
import { Drawer } from "react-native-paper";
import styled from "styled-components/native";
const defaultStyleClasses = [];

export const SCDrawer = styled(Drawer.Section, {})((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
