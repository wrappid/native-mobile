// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import OtpInputs from "react-native-otp-inputs";
import { useTheme } from "react-native-paper";

export default function NativeOtpInput(props) {
  const {
    onChange, formik, value, numInputs = 6, id, ...restProps 
  } = props;
  const theme = useTheme();

  const handleChange = (otpValue) => {
    formik?.setFieldValue(id, otpValue);
    if (onChange) {
      onChange(otpValue);
    }
  };

  return (
    <OtpInputs
      handleChange={(otpValue) => {
        // -- console.log(`otpValue=${otpValue}`);
        handleChange(otpValue);
      }}
      otp={value}
      numberOfInputs={numInputs}
      inputStyles={{
        alignItems       : "center",
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 2,
        borderLeftColor  : "transparent",
        borderRightColor : "transparent",
        borderTopColor   : "transparent",
        color            : theme.colors.onSurfaceVariant,
        fontSize         : 20,
        justifyContent   : "center",
        letterSpacing    : 5,
        marginHorizontal : 6,
      }}
      {...restProps}
    />
  );
}
