/* eslint-disable no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { Snackbar } from "react-native-paper";

import { SCSnackbar } from "../../styledComponents/feedback/SCSnackbar";

function nativeDuration(autoHideDuration) {
  if (autoHideDuration <= 5000) {
    return Snackbar.DURATION_SHORT;
  } else if(autoHideDuration > 5000){
    return Snackbar.DURATION_LONG;
  }
  else {
    return Snackbar.DURATION_INDEFINITE;
  }
  
}

export default function NativeSnackbar(props) {
  const { open, children, autoHideDuration, onClose, ...restProps } = props;
  // eslint-disable-next-line etc/no-commented-out-code
  // const duration = nativeDuration(autoHideDuration);

  return <SCSnackbar
    visible={open}
    duration={Snackbar.DURATION_LONG}
    onDismiss={onClose}
    {...restProps}>{children}</SCSnackbar>;
}
