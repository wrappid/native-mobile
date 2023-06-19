import React from 'react';
import OtpInputs from 'react-native-otp-inputs';

export default function NativeOtpInput(props) {
  const {onChange, formik, value, numInputs = 6, id, ...restProps} = props;

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
      inputStyles={{borderColor: 'black', borderWidth: 1, borderRadius: 8}}
      {...restProps}
    />
  );
}
