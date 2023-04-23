import styled from 'styled-components/native';
import OtpInputs from 'react-native-otp-inputs';
import {getEffectiveStyle} from '@wrappid/styles';

export const SCOtpInput = styled(
  OtpInputs,
  {},
)(props => ({
  ...getEffectiveStyle([...(props?.styleClasses || [])]),
}));
