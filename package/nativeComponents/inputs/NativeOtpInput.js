import React, {useRef} from 'react';
import OtpInputs from 'react-native-otp-inputs';

export default function NativeOtpInput(props) {
  const {onChange, formik, numInputs = 6, id, ...restProps} = props;

  const ref = useRef();

  const handleChange = otpValue => {
    formik?.setFieldValue(id, otpValue);
    if (onChange) {
      onChange(otpValue);
    }
  };

  return (
    <OtpInputs
      ref={ref}
      handleChange={otpValue => {
        handleChange(otpValue);
      }}
      otp={1234}
      numberOfInputs={numInputs}
      inputStyles={{borderColor: 'black', borderWidth: 1, borderRadius: 8}}
      {...restProps}
    />
  );
}
