import styled from "styled-components/native";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { Appbar } from "react-native-paper";

const defaultStyleClasses = [StyledComponentsClasses.SURFACES.APP_BAR];

export const SCAppBar = styled(Appbar.Header, {
  // shouldForwardProp: (prop) => prop !== "open",
})((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
