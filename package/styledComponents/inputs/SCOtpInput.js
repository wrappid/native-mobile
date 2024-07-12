// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle } from "@wrappid/styles";
import OtpInputs from "react-native-otp-inputs";
import styled from "styled-components/native";

export const SCOtpInput = styled(
  OtpInputs,
  {}
)((props) => ({ ...getEffectiveStyle([...(props?.styleClasses || [])]) }));
