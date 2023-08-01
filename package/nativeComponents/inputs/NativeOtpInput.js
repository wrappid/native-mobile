import React from 'react';
import OtpInputs from 'react-native-otp-inputs';
import {useTheme} from 'react-native-paper';

export default function NativeOtpInput(props) {
  const {onChange, formik, value, numInputs = 6, id, ...restProps} = props;
  const theme = useTheme();

  const handleChange = otpValue => {
    formik?.setFieldValue(id, otpValue);
    if (onChange) {
      onChange(otpValue);
    }
  };

  return (
    <OtpInputs
      handleChange={otpValue => {
        console.log(`otpValue=${otpValue}`);
        handleChange(otpValue);
      }}
      otp={value}
      numberOfInputs={numInputs}
      inputStyles={{
        borderBottomColor: theme.colors.primary,
        color: theme.colors.onSurfaceVariant,
        borderBottomWidth: 2,
        marginHorizontal: 6,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 5,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      }}
      {...restProps}
    />
  );
}
